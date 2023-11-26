export interface Modifier {
    name: string;
    type: string;
    step: number;
}

export interface ItemModifier {
    modifier: Modifier;
    value: number;
}