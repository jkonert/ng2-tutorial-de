import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import {HeroWeaponHistory} from "./hero-weapon-history.component";
import {HeroFightComponent} from "./hero-fight.component";


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroWeaponHistory,
    HeroFightComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
