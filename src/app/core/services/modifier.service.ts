import { Injectable } from '@angular/core';
import { ItemModifier, Modifier } from '../model/modifiers';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ModifierService {
    private modifiers: Modifier[] = [];

    constructor(private http: HttpClient) {
        this.loadModifiers().subscribe((modifiers) => {
            this.modifiers = modifiers;
        });
    }

    /**
     * Loads the modifiers from the JSON file.
     * @returns An observable that emits an array of Modifier objects.
     */
    private loadModifiers(): Observable<Modifier[]> {
        const modifiersUrl = './assets/data/modifiers.json';
        return this.http.get<Modifier[]>(modifiersUrl).pipe(
            tap((modifiers) => {
                console.log('Loaded modifiers:', modifiers);
            })
        );
    }

    /**
     * Generates item modifiers based on the rarity and level.
     * 
     * @param rarity - The rarity of the item.
     * @param level - The level of the item.
     * @returns An array of item modifiers.
     */
    generateModifiers(rarity: string, level: number): ItemModifier[] {
        const maxModifiers = this.getMaxModifiersForRarity(rarity);
        const applicableModifiers = this.modifiers;
    
        const itemModifiers: ItemModifier[] = [];
    
        for (let i = 0; i < maxModifiers; i++) {
            if (applicableModifiers.length === 0) {
                break;
            }
            let randomIndex = Math.floor(Math.random() * applicableModifiers.length);
            let selectedModifier = applicableModifiers[randomIndex];
            let value = this.generateValue(rarity, level, selectedModifier);
            itemModifiers.push({ modifier: selectedModifier, value });
            applicableModifiers.splice(randomIndex, 1);
        }
    
        return itemModifiers;
    }

    /**
     * Returns the maximum number of modifiers for a given rarity.
     * @param rarity - The rarity of the modifier.
     * @returns The maximum number of modifiers for the given rarity.
     */
    private getMaxModifiersForRarity(rarity: string): number {
        const maxModifiersMap: { [key: string]: number } = {
            common: 1,
            magic: 2,
            rare: 3,
            epic: 4,
            legendary: 5,
            mythical: 6,
            divine: 7
        };
        return maxModifiersMap[rarity] || 0;
    }

    /**
     * Generates a value based on the rarity, level, and selected modifier.
     * 
     * @param rarity - The rarity of the modifier.
     * @param level - The level of the modifier.
     * @param selectedModifier - The selected modifier.
     * @returns The generated value.
     */
    private generateValue(rarity: string, level: number, selectedModifier: Modifier): number {
        const rarityFactor = this.getMaxModifiersForRarity(rarity) || 1;
        const multiplierForRarity = 1 + (rarityFactor - 1) / 6;
        let value = Math.max(Math.floor(selectedModifier.step * level * multiplierForRarity), 1);
        return Math.floor(value);
    }
}
