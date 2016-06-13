/**
 * HeroDetailComponent for the detailed view
 *
 * author András Bucsi, Jules Döring
 */
import {Component, Input, OnInit, Output, EventEmitter}  from '@angular/core';
import {Router }                from '@angular/router'

import {Hero}                   from './hero';
import {HeroService}            from "./hero.service";
import {PowerBoostCalculator}   from "./power-boost-calculator.component";

//noinspection JSAnnotator
@Component({
    selector : 'my-new-hero-detail',
    template: ` <div *ngIf="hero" id="newherodetails">
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
                   
                    <power-boost-calculator [hero]="hero"></power-boost-calculator>
 
                    <button (click)="goBack()">Back</button>
                    <button (click)="save()">Save</button>
                </div>`,
    // Angular doesn't know about the my-hero-detail tag, so we have to tell Angular to use the new directive
    directives: [PowerBoostCalculator]
})

export class NewHeroDetailComponent implements OnInit {


    private hero: Hero;

    /**
     * creates the services
     * @param router
     * @param heroService
     */
    constructor(
        private router:Router,
        private heroService:HeroService){}

    /**
     * called the hero service and save these data in the db
     */
    private save(){

        this.heroService.save(this.hero).then(hero => {
            this.hero = hero;
        });
        
        this.gotoHeroes()
    }

    /**
     * creates a new hero
     */
    ngOnInit() {
        this.hero = new Hero();
    }

    /**
     * navigate us to the hero list
     */
    gotoHeroes() {
        // Like <a [routerLink]="['Heroes']">Heroes</a>
        this.router.navigate(['/heroes']);
    }

    goBack(){
        window.history.back();
    }
}