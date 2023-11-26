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
import { InventorySlotComponent } from './components/atoms/inventory-slot/inventory-slot.component';
import { CharacterCreationComponent } from './components/templates/character-creation/character-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToggleVisibilityDirective } from './directives/toggle-visibility.directive';
import { InventoryWindowComponent } from './components/templates/inventory-window/inventory-window.component';
import { SkillWindowComponent } from './components/templates/skill-window/skill-window.component';
import { WorldWindowComponent } from './components/templates/world-window/world-window.component';
import { RegionWindowComponent } from './components/templates/region-window/region-window.component';
import { CharacterWindowComponent } from './components/templates/character-window/character-window.component';
import { WindowTitleComponent } from './components/atoms/window-title/window-title.component';
import { TooltipComponent } from './components/molecules/tooltip/tooltip.component';
import { TooltipDirective } from './directives/tooltip.directive';



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
    InventorySlotComponent,
    CharacterCreationComponent,
    ToggleVisibilityDirective,
    InventoryWindowComponent,
    SkillWindowComponent,
    WorldWindowComponent,
    RegionWindowComponent,
    CharacterWindowComponent,
    WindowTitleComponent,
    TooltipComponent,
    TooltipDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
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
    InventorySlotComponent,
    CharacterCreationComponent,
    InventoryWindowComponent,
    SkillWindowComponent,
    WorldWindowComponent,
    RegionWindowComponent,
    CharacterWindowComponent,
    WindowTitleComponent
  ]
})
export class SharedModule { }
