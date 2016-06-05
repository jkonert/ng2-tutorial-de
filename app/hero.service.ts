import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {

    /**
     * Retrieve the heroes.
     *
     * @returns {Promise<Hero[]>}
     */
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    /**
     * Simulates a slow connection while retrieving the heroes.
     *
     * @returns {Promise<Hero[]>|Promise}
     */
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }
}