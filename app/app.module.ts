import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import {HeroWeaponHistory} from "./hero/hero-weapon-history.component";
import {HeroFightComponent} from "./hero/hero-fight.component";
import {FightDirective} from "./shared/fight.directive";


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    HeroDetailComponent,
    AppComponent,
    HeroWeaponHistory,
    HeroFightComponent,
    FightDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
