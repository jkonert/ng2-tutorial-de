/**
 * Service delivering Hero data
 * @author Johannes Konert
 */
import { Injectable } from '@angular/core';
import {Hero} from './hero';
import { HEROES } from './heroes-mockdata';

@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => { return this.getHeroes(); });
    }
}
