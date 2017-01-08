import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TabsModule} from "../tabs/tabs.module";
import {HeroDetailComponent} from './hero-detail.component';
import {HeroWeaponHistory} from './hero-weapon-history.component';
import {HeroFightComponent} from './hero-fight.component';
import {FightDirective} from './fight.directive';
import {HeroEditorComponent} from './hero-editor.component';
import {HeroCardComponent} from './hero-card.component';
import {HeroSearchComponent} from "./hero-search.component";
import { HeroAgePipe } from './hero-age.pipe';


@NgModule({
    imports: [CommonModule, FormsModule, TabsModule],
    declarations: [
        HeroDetailComponent,
        HeroWeaponHistory,
        HeroFightComponent,
        FightDirective,
        HeroFightComponent,
        HeroEditorComponent,
        HeroCardComponent,
        HeroSearchComponent,
        HeroAgePipe
    ],
    exports: [
        HeroDetailComponent,
        HeroFightComponent,
        HeroCardComponent,
        HeroEditorComponent,
        HeroSearchComponent
    ]
})
export class HeroModule { }
