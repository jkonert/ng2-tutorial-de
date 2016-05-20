/**
 * Application component using the helloworld-app directive
 * Hero included and new directive my-hero-detail added
 *
 * @author Johannes Konert, András Bucsi, Jules Döring
 */
import {Component}           from 'angular2/core';
import {Hero}                from './hero';
import {HeroDetailComponent} from './hero-detail.component';


@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>

                <ul class="items">
                        <li *ngFor="let hero of heroes" class="items" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
                            <span class="badge">{{hero.id}}</span>
                            {{hero.name}}
                        </li>
                </ul>

                <template [ngIf]="selectedHero">
                    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
                </template>
                `,
    // Angular doesn't know about the my-hero-detail tag, so we have to tell Angular to use the new directive
    directives: [HeroDetailComponent]
})


export class AppComponent {
    private title       : string; // Title of the app
    private selectedHero: Hero;   // selected hero from list
    private heroes      : Hero[]; // Array for heroes

    /**
     * One way of assigning values to the variables: the constructor
     */
    constructor () {
        this.title = 'Tour of Heroes';
        this.heroes = [
            new Hero(1,'Windstorm', 300, 'Olympia', 'Thunderbolt'), // Parameters defined in the Hero class (hero.ts-file)
            new Hero(2,'Magneto', 35, 'Stalingrad', 'Neodym'),
            new Hero(3,'Magma', 3000, 'Earth Core', 'Lava')
        ];
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
