/**
 * Application component using the helloworld-app directive
 * Hero included and new directive my-hero-detail added
 *
 * @author Johannes Konert, András Bucsi, Jules Döring
 */
import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';


@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>

                <ul class="items">
                    <li class="items" [class.selected]="heroes[0] === selectedHero" (click)="onSelect(heroes[0])"><span class="badge">{{ heroes[0].id }}</span> {{ heroes[0].name }}</li>
                    <li class="items" [class.selected]="heroes[1] === selectedHero" (click)="onSelect(heroes[1])"><span class="badge">{{ heroes[1].id }}</span> {{ heroes[1].name }}</li>
                    <li class="items" [class.selected]="heroes[2] === selectedHero" (click)="onSelect(heroes[2])"><span class="badge">{{ heroes[2].id }}</span> {{ heroes[2].name }}</li>
                  </ul>

                  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
                `,
    // Angular doesn't know about the my-hero-detail tag, so we have to tell Angular to use the new directive
    directives: [HeroDetailComponent]
})


export class AppComponent {
    title       : string; // Title of the app
    selectedHero: Hero;   // selected hero from list
    heroes      : Hero[]; // Array for heroes

    /**
     * One way of assigning values to the variables: the constructor
     */
    constructor(){
        this.title = 'Tour of Heroes';
        this.heroes = [ new Hero(1,'Windstorm', 300, 'Olympia', 'Thunderbolt'), // Parameters defined in the Hero class (hero.ts-file)
                        new Hero(2,'Magneto', 35, 'Stalingrad', 'Neodym'),
                        new Hero(3,'Magma', 3000, 'Earth Core', 'Lava')
                      ];
        this.selectedHero = this.heroes[0];
    }

    /**
     * method the is called at event triggering (here at onClick)
     * The method assigns the passed hero-object to the variable selectedHero
     *
     * @param hero passed hero Object
     */
    onSelect(hero: Hero) {
        this.selectedHero = hero;
        console.log(this.selectedHero);}
}
