import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuButtonComponent } from './components/atoms/main-menu-button/main-menu-button.component';
import { SideBarButtonComponent } from './components/atoms/side-bar-button/side-bar-button.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { AsideMenuComponent } from './components/organisms/aside-menu/aside-menu.component';
import { PlayerVitalsComponent } from './components/atoms/player-vitals/player-vitals.component';
import { PlayerIdentityComponent } from './components/atoms/player-identity/player-identity.component';
import { ExperienceBarComponent } from './components/atoms/experience-bar/experience-bar.component';
import { PlayerResourceComponent } from './components/atoms/player-resource/player-resource.component';
import { MainMenuComponent } from './components/molecules/main-menu/main-menu.component';
import { MainWindowComponent } from './components/templates/main-window/main-window.component';
import { InventorySlotComponent } from './components/atoms/inventory-slot/inventory-slot.component';
import { CharacterCreationComponent } from './components/templates/character-creation/character-creation.component';



@NgModule({
  declarations: [
    MainMenuButtonComponent,
    SideBarButtonComponent,
    HeaderComponent,
    AsideMenuComponent,
    PlayerVitalsComponent,
    PlayerIdentityComponent,
    ExperienceBarComponent,
    PlayerResourceComponent,
    MainMenuComponent,
    MainWindowComponent,
    InventorySlotComponent,
    CharacterCreationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainMenuButtonComponent,
    SideBarButtonComponent,
    HeaderComponent,
    AsideMenuComponent,
    PlayerVitalsComponent,
    PlayerIdentityComponent,
    ExperienceBarComponent,
    MainMenuComponent,
    MainWindowComponent,
    InventorySlotComponent,
    CharacterCreationComponent
  ]
})
export class SharedModule { }
