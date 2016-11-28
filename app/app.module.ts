import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent}  from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroWeaponHistory} from './hero-weapon-history.component';
import {HeroFightComponent} from './hero-fight.component';
import {FightDirective} from './fight.directive';
import {HeroService} from './hero.service';
import {HeroEditorComponent} from './hero-editor.component';
import {HeroCardComponent} from './hero-card.component';
import {RestoreService} from './restore.service';


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
    providers: [HeroService, RestoreService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
