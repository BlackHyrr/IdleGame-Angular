interface PlayerInterface {
    name: string;
    title: string;
    portraitSmall: string | null;
    portraitLarge: string | null;
    level: number;
    experience: number;
    titles?: string[];
    stats: StatisticsInterface;
    inventorySlots: number;
    birthSign: BirthSign; 
}

const birthSignStatsMap: Record<BirthSign, BirthSignStatsInterface> = {
    'Aries': { health: 10, mana: 5, stamina: 8 },
    'Taurus': { health: 15, mana: 3, stamina: 10 },
    'Gemini': { health: 8, mana: 12, stamina: 6 },
    'Cancer': { health: 12, mana: 8, stamina: 7 },
    'Leo': { health: 14, mana: 6, stamina: 12 },
    'Virgo': { health: 10, mana: 10, stamina: 9 },
    'Libra': { health: 9, mana: 9, stamina: 11 },
    'Scorpio': { health: 11, mana: 7, stamina: 14 },
    'Sagittarius': { health: 13, mana: 4, stamina: 13 },
    'Capricorn': { health: 16, mana: 2, stamina: 15 },
    'Aquarius': { health: 6, mana: 14, stamina: 5 },
    'Pisces': { health: 7, mana: 11, stamina: 4 },
};

export class Player implements PlayerInterface{
    name: string = '';
    title: string = '';
    portraitSmall: string = './assets/images/portrait/HE-WS-KN-M105/Small.png';
    portraitLarge: string = './assets/images/portrait/HE-WS-KN-M105/Large.png';;
    level: number = 0;
    experience: number = 0;
    titles?: string[];
    stats: StatisticsInterface = {} as StatisticsInterface;;
    inventorySlots: number = 0;
    birthSign: BirthSign = 'Aries';

    constructor() {

    }



    updateStatsBasedOnBirthSign(): void {
        const birthSignStats: BirthSignStatsInterface = birthSignStatsMap[this.birthSign];

        if(birthSignStats) {
            this.stats.health += birthSignStats.health ?? 0;
            this.stats.mana += birthSignStats.mana ?? 0;
            this.stats.stamina += birthSignStats.stamina ?? 0;
        }
    }
}