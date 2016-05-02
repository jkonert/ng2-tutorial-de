/**
 * HeroDetailComponent for the detailed view
 *
 * author András Bucsi, Jules Döring
 */
import {Component}  from 'angular2/core';
import {Input}      from 'angular2/core';
import {Hero}       from './hero';


@Component({
    selector : 'my-hero-detail',
    template: `  <div>
                    <h2>{{hero.name}} details!</h2>
                    <ul class="items">
                            <li class="items"><span class="badge">ID</span>     {{hero.id}}</li>
                            <li class="items"><span class="badge">NAME</span>   {{hero.name}}</li>
                            <li class="items"><span class="badge">AGE</span>    {{hero.age}}</li>
                            <li class="items"><span class="badge">PLACE OF RESIDENCE</span> {{hero.placeOfResidence}}</li>
                            <li class="items"><span class="badge">FAVORITE WEAPON</span>    {{hero.favoriteWeapon}}</li>
                    </ul>

                    <h2>Edit details of {{hero.name}}</h2>
                    <div>
                      <label>name: </label> <input [(ngModel)]="hero.name" placeholder="name">
                      <label>age: </label>  <input [(ngModel)]="hero.age" placeholder="age">
                      <label>place of residence: </label>
                      <input [(ngModel)]="hero.placeOfResidence" placeholder="place of residence">
                      <label>favorite weapon: </label>
                      <input [(ngModel)]="hero.favoriteWeapon" placeholder="favourite weapon">
                    </div>
                  </div>`
})

export class HeroDetailComponent {
    /**
     * Important for Binding, otherwise an error will be thrown
     */
    @Input()
    hero: Hero;
}