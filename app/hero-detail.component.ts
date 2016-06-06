/**
 * HeroDetailComponent for the detailed view
 *
 * author András Bucsi, Jules Döring
 */
import {Component, Input}  from '@angular/core';
import {Hero}              from './hero';
import {NameComponent} from './name.component';
import {HeroService}         from "./hero.service";

@Component({
    selector : 'my-hero-detail',
    providers: [HeroService],
    template: `  <div id="herodetails">
                    <h2>{{hero.name}} details:</h2>
                    <ul class="items">
                        <li class="item">
                            <span class="badge">ID</span>
                            {{hero.id}}
                        </li>
                        <li class="item">
                            <span class="badge">NAME</span>
                            <input [(ngModel)]="hero.name" placeholder="name">
                        </li>
                        <li class="item">
                            <span class="badge">NAME2</span>
                            <name-child [name]="hero.name"></name-child>
                        </li>
                        <li class="item">
                            <span class="badge">AGE</span>
                            <input [(ngModel)]="hero.age" [style.color] = "hero.age > 100 ? 'red' : 'green'" placeholder="age">
                        </li>
                        <li class="item">
                            <span class="badge">PLACE OF RESIDENCE</span>
                            <input [(ngModel)]="hero.placeOfResidence" placeholder="place of residence">
                        </li>
                        <li class="item">
                            <span class="badge">
                                FAVORITE WEAPON
                            </span>
                            <span [ngSwitch]="hero.favoriteWeapon">
                                <template [ngSwitchWhen]="'Thunderbolt'"><i class="fa fa-bolt"></i></template>
                                <template [ngSwitchWhen]="'Neodym'"><i class="fa fa-first-order"></i></template>
                                <template [ngSwitchWhen]="'Lava'"><i class="fa fa-fire"></i></template>
                                <template ngSwitchDefault><i class="fa fa-circle"></i></template>
                            </span>
                            <input [(ngModel)]="hero.favoriteWeapon" placeholder="favorite weapon">
                        </li>
                    </ul>
                    <button (click)="save()">Save</button>
                </div>`,
    directives: [NameComponent]
})

export class HeroDetailComponent {
    /**
     * Important for Binding, otherwise an error will be thrown
     */

    @Input()
    private hero: Hero;

    constructor (private heroService: HeroService) {
    }

    private save(){
        this.heroService.save(this.hero);

    }
}