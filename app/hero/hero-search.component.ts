import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {HeroSearchService} from "./hero-search.service";
import {Hero} from "./hero";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'hero-search',
    templateUrl: 'app/hero/hero-search.component.html',
    styleUrls: ['app/hero/hero-search.component.css'],
    providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    @Output() showDetails = new EventEmitter<Hero>();

    constructor( private heroSearchService: HeroSearchService ){}

    ngOnInit():void {
        this.initHeroes();
    }

    initHeroes() :void{
        this.heroes = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.heroSearchService.search(term)
                // or the observable of empty heroes if no search term
                : Observable.of<Hero[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    gotoDetail(hero: Hero): void {
        this.heroes = Observable.of<Hero[]>([]);
        this.initHeroes();
        this.showDetails.emit(hero);
    }
}