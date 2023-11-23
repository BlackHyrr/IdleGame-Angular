import { Component, Input, OnInit } from '@angular/core';
import { Player, PlayerInterface, playerDefaultStats } from '../../../../core/model/player';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { BirthSign } from '../../../../core/model/birthSign';
import { portraits } from '../../../../core/model/portraitsMockup';
import { PlayerService } from '../../../../core/services/player.service';
import { WindowStateService } from '../../../../core/services/window-state.service';
import { take } from 'rxjs';


@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrl: './character-creation.component.scss'
})
export class CharacterCreationComponent implements OnInit{

  birthsignsList: BirthSign[] = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  formSubmitted: boolean = false;
  @Input() portraits: string[] = portraits;
  @Input() portraitLarge: string = '';

  characterForm = new FormGroup({
    name: new FormControl('', {validators: [Validators.required, Validators.minLength(3), Validators.maxLength(25)], nonNullable: true}) ?? '' , 
    rank: new FormControl('', {nonNullable: true}),
    portraitSmall: new FormControl('', {validators:[Validators.required], nonNullable: true}),
    portraitLarge: new FormControl('', {validators:[Validators.required], nonNullable: true}),
    titles: new FormControl<string[]>([], {nonNullable: true}),
    birthSign: new FormControl('Aries', {validators:[Validators.required], nonNullable: true}),
  })

  constructor(private playerService: PlayerService, protected windowStateService: WindowStateService) {}

  ngOnInit(): void {
    this.windowStateService.setDefaultWindow('creationMenu');
  }

  selectPortrait(portrait: string): void {
    this.characterForm.get('portraitLarge')?.setValue(`${portrait}/Fulllength.webp`);
    this.characterForm.get('portraitSmall')?.setValue(`${portrait}/Small.webp`);
    this.portraitLarge = `${portrait}/Fulllength.webp` || '';
  }

  toggleWindow(windowId: string): void {
    if (!this.characterForm.valid) {
      return;
    }
    this.windowStateService.openWindow$.pipe(take(1)).subscribe((currentWindow) => {
      if (currentWindow === windowId) {
        this.windowStateService.closeWindow();
      } else {
        this.windowStateService.openWindow(windowId);
      }
    });
  }

  onSubmit() {
    if (this.characterForm.valid) {
      const formData = this.characterForm.getRawValue();
      const defaultValues: Partial<PlayerInterface> = {
        level: 1,
        experience: 0,
        stats: playerDefaultStats,
      };

      const playerData: PlayerInterface = { ...defaultValues, ...formData } as PlayerInterface;

      const player = new Player(playerData);
      this.playerService.setPlayer(player);
      console.log(player);

      this.formSubmitted = true;
    }
    else {
      console.log('form invalid');
    }
  }
}
