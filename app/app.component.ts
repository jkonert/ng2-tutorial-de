import { Component }                        from '@angular/core';
import { Routes, ROUTER_DIRECTIVES }   from '@angular/router';

import { HeroService }                      from './hero.service';
import { HeroesComponent }                  from './heroes.component';
import { HeroDetailComponent }              from "./hero-detail.component";
import { NewHeroDetailComponent }           from "./new-hero-detail.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav><a [routerLink]="['/heroes']">Heroes</a></nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService]    // tell Angular to inject the HeroService
})

@Routes([
    {path: '/heroes',   component: HeroesComponent},
    {path: '/hero/:id', component: HeroDetailComponent},
    {path: '/newHero',  component: NewHeroDetailComponent}
])

export class AppComponent {
    private title       : string; // Title of the app

    /**
     * One way of assigning values to the variables: the constructor
     */
    constructor () {
        this.title = 'Tour of Heroes';
    }
}