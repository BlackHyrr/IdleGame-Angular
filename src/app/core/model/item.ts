export interface ItemModifierInterface {
    maxHealth?: number;
    maxMana?: number;
    maxStamina?: number;
    healthmodifier?: number;
    manaModifier?: number;
    staminaModifier?: number;
}

export interface ItemInterface {
    id: number;
    name: string;
    description?: string;
    image: string;
    price: number;
    stats?: ItemModifierInterface;
}

let nextItemId = 1;

type Rarity = 'common' | 'magic' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'divine';

export class Item implements ItemInterface {
    id: number;
    name: string;
    description?: string;
    image: string;
    rarity: Rarity;
    price: number;
    stats?: ItemModifierInterface;

    constructor(name: string, description: string, image: string, rarity: Rarity, price: number, stats: ItemModifierInterface) {
        this.id = this.generateUniqueId();
        this.name = name;
        this.description = description;
        this.image = image || './assets/images/items/tile000.png';
        this.rarity = rarity;
        this.price = price;
        this.stats = stats;
    }

    private generateUniqueId():number {
        return nextItemId++;
    }
}