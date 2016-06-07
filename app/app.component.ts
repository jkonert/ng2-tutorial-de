/**
 * Application component using the helloworld-app directive
 * Hero included and new directive my-hero-detail added
 *
 * @author Johannes Konert, András Bucsi, Jules Döring
 */
import {Component, OnInit}   from 'angular2/core';
import {Hero}                from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService}         from './hero.service';
import {HeroBirthday}        from './hero-birthday1.component';
import {HeroBirthday2}       from './hero-birthday2.component';
import {PowerBoostCalculator}       from './power-boost-calculator.component';


@Component({
    selector: 'my-app',

    styleUrls:  ['/hero-detail.component.css', '/app.component.css'],

    template: `<h1>{{title}}</h1>


                <ul class="items">
                        <li *ngFor="let hero of heroes" class="items" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
                            <span class="badge">{{hero.id}}</span>
                        {{hero.name}}
                        </li>
                </ul>


                <div *ngIf="selectedHero">
                  <h2>
                    {{selectedHero.name | uppercase}} is my hero
                  </h2>
                </div>




                <template [ngIf]="selectedHero">
                       <hero-birthday2 [hero]="selectedHero"></hero-birthday2>
                </template>




                <template [ngIf]="selectedHero">
                    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
                </template>

                <template [ngIf]="selectedHero">
                       <power-boost-calculator [hero]="selectedHero"></power-boost-calculator>
                </template>


                `,
    // Angular doesn't know about the my-hero-detail tag, so we have to tell Angular to use the new directive
    directives: [HeroDetailComponent, HeroBirthday, HeroBirthday2, PowerBoostCalculator],
    providers: [HeroService] // tell Angular to inject the HeroService
})


export class AppComponent implements OnInit {
    private title       : string; // Title of the app
    private selectedHero: Hero;   // selected hero from list
    private heroes      : Hero[]; // Array for heroes



    /**
     * One way of assigning values to the variables: the constructor
     *
     * The HeroService will be injected here and is available in this component and all of its children.
     */
    constructor (private heroService: HeroService) {
        this.title = 'Tour of Heroes';
    }


    /**
     * Get the heroes.
     */
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    /**
     * Get the heroes slowly.
     */
    getHeroesSlowly() {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    /**
     * method the is called at event triggering (here at onClick)
     * The method assigns the passed hero-object to the variable selectedHero
     *
     * @param hero passed hero Object
     */
    private onSelect(hero:Hero) {
        this.selectedHero = hero;
        console.log(this.selectedHero);
    }


}
