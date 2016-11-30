import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HeroDetailComponent } from './hero-detail.component';
import {HeroWeaponHistory} from "./hero-weapon-history.component";
import {HeroFightComponent} from "./hero-fight.component";
import {FightDirective} from "./fight.directive";



@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [
    HeroDetailComponent,
    HeroWeaponHistory,
    HeroFightComponent,
    FightDirective
  ],
  exports: [HeroDetailComponent, HeroFightComponent]

})
export class HeroModule { }
