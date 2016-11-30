/**
 * a sample component using the my-app directive
 * @author Johannes Konert
 */
import {Component, OnInit} from '@angular/core';
/**  * Class to hold hero details. Will be soon in an own file  */

import { Hero } from './hero/hero';
import {HeroService} from './hero/hero.service';
import {EditItem} from './edit-item';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
      title: string = 'Tour Of Heroes';
      heroes: Array<EditItem<Hero>>;
      values: string = '';
      selectedHero: Hero = null;
      fightingHero: Hero;
      details: string = 'Hero-Details';
      villain: string;
      hideFight: boolean = true;

      constructor(private heroService: HeroService) {
      }

      /** Called by AngularJS after constructor and after injected services and child-components are set */
      ngOnInit(): void {
          // this.heroes = this.heroService.getHeroes();
          this.heroService
              .getHeroesSlowly()
              .then(heroes => {
                  this.heroes = heroes.map(item => new EditItem(item));
              });
      }

    onSaved (editItem: EditItem<Hero>, updatedHero: Hero) {
        editItem.item = Object.assign(editItem.item, updatedHero);
        editItem.editing = false;
    }
    onCanceled (editItem: EditItem<Hero>) {
        editItem.editing = false;
    }

      /**  assigns an Hero to the Component's "selectedHero" property by clicking onto one of the Heros, which are listed on
       * the *ngFor-generated hero list
       * @param the Hero that has been clicked last */
      onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.hideFight = true;
      }

    onFight(hero: Hero): void {
        this.fightingHero = hero;
        this.hideFight = false;
    }
}
