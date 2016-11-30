import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroWeaponHistory} from './hero-weapon-history.component';
import {HeroFightComponent} from './hero-fight.component';
import {FightDirective} from './fight.directive';
import {HeroEditorComponent} from './hero-editor.component';
import {HeroCardComponent} from './hero-card.component';


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        HeroDetailComponent,
        HeroWeaponHistory,
        HeroFightComponent,
        FightDirective,
        HeroFightComponent,
        HeroEditorComponent,
        HeroCardComponent
    ],
    exports: [HeroDetailComponent, HeroFightComponent, HeroCardComponent, HeroEditorComponent]

})
export class HeroModule { }
