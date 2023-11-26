import { Injectable } from '@angular/core';
import { ModifierService } from './modifier.service';
import { Item, ItemType, Rarity } from '../model/item';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, of, switchMap, tap } from 'rxjs';


let nextItemId = 0;

@Injectable({
  providedIn: 'root',
})
export class ItemService {

    constructor(private modifierService: ModifierService, private http: HttpClient) {}

    generateItem(level: number, itemType: ItemType): Observable<Item> {
        const rarity = this.getRandomRarity(level);
        return forkJoin({
            name: this.getRandomProperty(itemType, 'names'),
            description: this.getRandomProperty(itemType, 'descriptions')
        }).pipe(
            switchMap(({ name, description }) => {
                const item: Item = {
                    id: this.generateUniqueId(),
                    type: itemType,
                    name: name,
                    level: level,
                    description: description,
                    image: this.getRandomImage(itemType),
                    rarity: rarity as Rarity,
                    price: this.generateItemValue(rarity, level),
                    modifiers: this.modifierService.generateModifiers(rarity, level),
                };
                return of(item);
            })
        );
    }

    generateItemValue(rarity: string, level: number): number {
        const baseValue = 100;
        const valueMultiplier = 1.25 * level;
        const rarityMultiplier = this.getRarityMultiplier(rarity);

        return Math.floor(baseValue * valueMultiplier * rarityMultiplier);
    }

    getRarityMultiplier(rarity: string): number {
        switch (rarity) {
            case 'common':
                return 1;
            case 'magic':
                return 1.3;
            case 'rare':
                return 1.6;
            case 'epic':
                return 1.9;
            case 'legendary':
                return 2.7;
            case 'mythical':
                return 3.5;
            case 'divine':
                return 5;
            default:
                return 1;
        }
    }

    private getRandomRarity(level: number): string {
        const rarityProbabilities: { [key: string]: number } = {
            common: 0.2,
            magic: 0.3,
            rare: 0.25,
            epic: 0.15,
            legendary: 0.08,
            mythical: 0.02,
            divine: 0.005,
        };
    
        const totalProbability = Object.values(rarityProbabilities).reduce((sum, probability) => sum + probability, 0);
    
        const randomValue = Math.random() * totalProbability;
    
        let cumulativeProbability = 0;
        for (const [rarity, probability] of Object.entries(rarityProbabilities)) {
            cumulativeProbability += probability;
            if (randomValue <= cumulativeProbability) {
                return rarity;
            }
        }
    
        return 'common';
    }

    private getRandomProperty(itemType: ItemType, propertyName: string): Observable<string> {
        const jsonFile = `./assets/data/${itemType.toLowerCase()}.json`;
    
        return this.http.get<{ [key: string]: string[] }>(jsonFile).pipe(
            tap((data) => {
                console.log(`Loaded ${itemType} data:`, data);
            }),
            map((data) => {
                const propertyValues = data[propertyName];
                if (propertyValues && propertyValues.length > 0) {
                    const randomIndex = Math.floor(Math.random() * propertyValues.length);
                    return propertyValues[randomIndex];
                } else {
                    return '';
                }
            })
        );
    }

    private getRandomImage(itemType: ItemType): string{
        const imageFolder = `./assets/images/items/${itemType.toLowerCase()}/`;
        const imageCount = 60;
        const randomIndex = Math.floor(Math.random() * imageCount);
        return `${imageFolder}tile${randomIndex.toString().padStart(3, '0')}.png`;
    }

    private generateUniqueId():number {
      return nextItemId++;
    }
}
