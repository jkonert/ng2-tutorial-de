/**
 * Application component using the helloworld-app directive
 * Hero included and new directive my-hero-detail added
 *
 * @author Johannes Konert, András Bucsi, Jules Döring
 */

import {Component, OnInit}      from '@angular/core';
import {Router}                 from '@angular/router';

import {Hero}                   from './hero';
import {HeroService}            from "./hero.service";


@Component({
    selector: 'my-heroes',
    styleUrls:  ['/hero-detail.component.css', '/heroes.component.css'],
    template: `<ul class="items">
                        <li *ngFor="let hero of heroes" class="items" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
                            <span class="badge">{{hero.id}}</span>
                            {{hero.name}}
                            <button style="float: right;" class="delete-button" (click)="delete(hero, $event)">Delete</button>
                        </li>
                </ul>
                
                <button (click)="addHero()">Add New Hero</button>
                <button (click)="navigateToYoungestHero()">navigate to youngest hero</button>
                <button (click)="navigateToRandomHero()">navigate to hero of the moment</button>
                `
    })

export class HeroesComponent implements OnInit {
    public selectedHero: Hero;   // selected hero from list
    private heroes      : Hero[]; // Array for heroes

    /**
     * One way of assigning values to the variables: the constructor
     *
     * The HeroService will be injected here and is available in this component and all of its children.
     */
    constructor (private heroService: HeroService, private router: Router) {}

    /**
     * Get the heroes.
     */
    ngOnInit() {
        this.getHeroes();
    }

    /**
     * Delete the current hero
     * @param hero
     * @param event
     */
    private delete(hero:Hero,event:any){
        event.stopPropagation();
        this.heroService.delete(hero);
        this.getHeroes();
        if (this.selectedHero === hero) { this.selectedHero = null;
        }
    }

    private getYoungestHeroesID(){
        function compare(a,b) {
            if (a.age < b.age)
                return -1;
            if (a.age > b.age)
                return 1;
            return 0;
        }
        var sortedHeroes = this.heroes.sort(compare);
        return sortedHeroes[0].id;
    }

    private navigateToYoungestHero(){
        this.router.navigate(['/hero', this.getYoungestHeroesID()])
    }

    private getRandomHeroesID(){
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min +1)) + min;
        }
        return this.heroes[getRandomInt(0,this.heroes.length-1)].id;
    }

    private navigateToRandomHero(){
        this.router.navigate(['/hero', this.getRandomHeroesID()])
    }

    /**
     * Call the route /newHero
     */
    private addHero() {
        this.router.navigate( ['/newHero'] );
    }

    /**
     * Get the heroes.
     */
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    /**
     * method the is called at event triggering (here at onClick)
     * The method assigns the passed hero-object to the variable selectedHero
     *
     * @param hero passed hero Object
     */
    private onSelect(hero:Hero) {
        this.selectedHero = hero;
        // console.log(this.selectedHero);
        // call the route /hero/:id
        this.router.navigate(['/hero', hero.id]);
    }
}
