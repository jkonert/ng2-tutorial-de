/**
 * Service delivering Hero data
 * @author Johannes Konert
 */
import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

    private heroUrl = 'app/heroes';
    private heroUrlApi = 'http://localhost:3100/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(public http: Http){}

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    update(hero: Hero): Promise<Hero>{
        const url = `${this.heroUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string, weapon: string, power: string): Promise<Hero> {
        return this.http
            .post(this.heroUrl, JSON.stringify({name: name, weapon: weapon, power: power, birthday: new Date(1991, 9, 11)}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => { return this.getHeroes(); });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
