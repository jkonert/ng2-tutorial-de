import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent}  from './app.component';
import {HeroDetailComponent} from './hero/hero-detail.component';
import {HeroWeaponHistory} from './hero/hero-weapon-history.component';
import {HeroFightComponent} from './hero/hero-fight.component';
import {FightDirective} from './hero/fight.directive';
import {HeroService} from './hero/hero.service';
import {HeroEditorComponent} from './hero/hero-editor.component';
import {HeroCardComponent} from './hero/hero-card.component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        HeroEditorComponent,
        HeroCardComponent,
        HeroDetailComponent,
        HeroWeaponHistory,
        HeroFightComponent,
        FightDirective
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
