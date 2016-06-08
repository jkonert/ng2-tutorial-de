/**
 * HeroDetailComponent for the detailed view
 *
 * author András Bucsi, Jules Döring
 */
import {Component, Input, OnInit, Output, EventEmitter}  from '@angular/core';

import {Hero}              from './hero';
import {HeroService}         from "./hero.service";


//noinspection JSAnnotator
@Component({
    selector : 'my-hero-detail',
    template: `  <div *ngIf="hero" id="herodetails">
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
                </div>`
})

export class HeroDetailComponent implements OnInit {

    /**
     * Important for Binding, otherwise an error will be thrown
     */

    @Input()
    hero: Hero;
    @Output()
    close = new EventEmitter();

    navigated = false; // true if navigated here


    // constructor (private heroService: HeroService, private routeParams: RouteParams) {
    constructor (private heroService: HeroService) {
    }

    private save(){

        this.heroService.save(this.hero).then(hero => {
            this.hero = hero; // saved hero, w/ id if new
            this.close.emit(hero);
        })

    }


    ngOnInit() {
        if (this.hero !== null) {
            let id = +this.hero.id;
            this.navigated = true;
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        } else {
            this.navigated = false;
            this.hero = new Hero();
        }
    }


}