import { ItemModifier } from "./modifiers";

export type ItemType = 'weapon' | 'armor';

export interface ItemInterface {
    id: number;
    type: ItemType;
    name: string;
    level: number;
    description?: string;
    image: string;
    price: number;
    modifiers?: ItemModifier[];
}

/* type Rarity = 'common' | 'magic' | 'rare' | 'epic' | 'legendary' | 'mythical' | 'divine'; */

export enum Rarity {
    Common = 'common',
    Magic = 'magic',
    Rare = 'rare',
    Epic = 'epic',
    Legendary = 'legendary',
    Mythical = 'mythical',
    Divine = 'divine'
}

export class Item implements ItemInterface {
    id: number;
    type: ItemType;
    name: string;
    level: number;
    description?: string;
    image: string;
    rarity: Rarity;
    price: number;
    modifiers?: ItemModifier[];

    constructor(id: number, type: ItemType, name: string, level: number, description: string, image: string, rarity: Rarity, price: number, modifiers: ItemModifier[]) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.level = level || 0;
        this.description = description;
        this.image = image || './assets/images/items/tile000.png';
        this.rarity = rarity;
        this.price = price;
        this.modifiers = modifiers;
    }
}