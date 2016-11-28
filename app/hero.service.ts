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
}
