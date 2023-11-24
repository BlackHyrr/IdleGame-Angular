import { BirthSign, BirthSignStatsInterface } from "./birthSign";
import { StatisticsInterface } from "./statistics";

export interface PlayerInterface {
    name: string;
    rank: string;
    portraitSmall: string;
    portraitLarge: string;
    level: number;
    experience: number;
    titles?: string[];
    stats: StatisticsInterface;
    birthSign: BirthSign;
}

export const playerDefaultStats: StatisticsInterface = {
    'health': 100,
    'stamina': 100,
    'mana': 10,
    'maxHealth': 100,
    'maxStamina': 100,
    'maxMana': 10,
    'inventorySlots': 15
}

export const birthSignStatsMap: Record<BirthSign, BirthSignStatsInterface> = {
    'Aries': { maxHealth: 10, maxMana: 5, maxStamina: 8 },
    'Taurus': { maxHealth: 15, maxMana: 3, maxStamina: 10 },
    'Gemini': { maxHealth: 8, maxMana: 12, maxStamina: 6 },
    'Cancer': { maxHealth: 12, maxMana: 8, maxStamina: 7 },
    'Leo': { maxHealth: 14, maxMana: 6, maxStamina: 12 },
    'Virgo': { maxHealth: 10, maxMana: 10, maxStamina: 9 },
    'Libra': { maxHealth: 9, maxMana: 9, maxStamina: 11 },
    'Scorpio': { maxHealth: 11, maxMana: 7, maxStamina: 14 },
    'Sagittarius': { maxHealth: 13, maxMana: 4, maxStamina: 13 },
    'Capricorn': { maxHealth: 16, maxMana: 2, maxStamina: 15 },
    'Aquarius': { maxHealth: 6, maxMana: 14, maxStamina: 5 },
    'Pisces': { maxHealth: 7, maxMana: 11, maxStamina: 4 },
};

export class Player implements PlayerInterface {
    name: string;
    rank: string;
    portraitSmall: string;
    portraitLarge: string;
    level: number;
    experience: number;
    titles?: string[];
    stats: StatisticsInterface = {} as StatisticsInterface;;
    birthSign: BirthSign;

    constructor(data: PlayerInterface) {
        this.name = data.name;
        this.rank = data.rank;
        this.portraitSmall = data.portraitSmall || './assets/images/portrait/0011/Small.webp';
        this.portraitLarge = data.portraitLarge || './assets/images/portrait/0011/Fulllength.webp';
        this.level = data.level || 1;
        this.experience = data.experience || 3000;
        this.titles = data.titles || [];
        this.stats = data.stats || playerDefaultStats;
        this.birthSign = data.birthSign || 'Aries';
    }



    updateStatsBasedOnBirthSign(): void {
        const birthSignStats: BirthSignStatsInterface = birthSignStatsMap[this.birthSign];

        if (birthSignStats) {
            this.stats.health += birthSignStats.maxHealth ?? 0;
            this.stats.mana += birthSignStats.maxMana ?? 0;
            this.stats.stamina += birthSignStats.maxStamina ?? 0;
            this.stats.maxHealth += birthSignStats.maxHealth ?? 0;
            this.stats.maxMana += birthSignStats.maxMana ?? 0;
            this.stats.maxStamina += birthSignStats.maxStamina ?? 0;
        }
    }

    experienceModifier: number = 0.07;

    get currentLevel(): number {
        return this.convertXpToLevel(this.currentXp);
    }

    get currentXp(): number {
        return this.experience;
    }

    get currentLevelProgress(): number {
        return this.calculateLevelProgress();
    }

    get currentExperienceNeeded(): number {
        return this.calculateExperienceNeeded();
    }

    private convertLevelToXp(level: number): number {
        return Math.pow(level / this.experienceModifier, 2);
    }

    private convertXpToLevel(experience: number): number {
        return Math.floor(Math.sqrt(experience) * this.experienceModifier) ;
    }

    private calculateLevelProgress(): number {
        let currentXp: number = this.currentXp;
        let currentLevelXp: number = this.convertLevelToXp(this.currentLevel);
        return currentXp - currentLevelXp;
    }

    private calculateExperienceNeeded(): number {
        let currentLevelXP: number = this.convertLevelToXp(this.currentLevel);
        let nextLevelXp: number = this.convertLevelToXp(this.currentLevel + 1);
        return nextLevelXp - currentLevelXP;
    }
}