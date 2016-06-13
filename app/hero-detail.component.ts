/**
 * HeroDetailComponent for the detailed view
 *
 * author András Bucsi, Jules Döring
 */
import {Component, Input, OnInit, Output, EventEmitter}  from '@angular/core';
import {RouteSegment, Router}   from '@angular/router';

import {Hero}                   from './hero';
import {HeroService}            from "./hero.service";
import {PowerBoostCalculator}   from "./power-boost-calculator.component";
import {HeroBirthday2}          from "./hero-birthday2.component";


//noinspection JSAnnotator
@Component({
    selector: 'my-hero-detail',
    template: ` <div *ngIf="hero" id="herodetails">
                 
                    <h2>{{hero.name | uppercase}} is my hero</h2>
                    <hero-birthday2 [hero]="hero"></hero-birthday2>
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
    directives: [HeroBirthday2, PowerBoostCalculator]


})

export class HeroDetailComponent implements OnInit {

    /**
     * Important for Binding, otherwise an error will be thrown
     */

    @Input()
    hero:Hero;

    constructor(private router:Router,
                private routeParams:RouteSegment,
                private heroService:HeroService) {
    }

    private save() {

        this.heroService.save(this.hero).then(hero => {
            this.hero = hero;
        });

        this.gotoHeroes()
    }

    ngOnInit() {
        if(+this.routeParams.getParam('id') != null){
            let id = +this.routeParams.getParam('id');
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);   
        }
        /*console.log(this.hero);
        if (this.hero === undefined) {
            window.alert("This id was not found!");
            this.gotoHeroes()
        }*/
    }

    gotoHeroes() {
        // Like <a [routerLink]="['Heroes']">Heroes</a>
        this.router.navigate(['/heroes']);
    }

    goBack(){
        window.history.back();
    }

}