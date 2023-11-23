export interface StatisticsInterface {
    health: number;
    mana: number;
    stamina: number;
    maxHealth: number;
    maxMana: number;
    maxStamina: number;
    inventorySlots: number;
    [key: string]: number;
}