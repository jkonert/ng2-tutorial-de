/**
 * a sample component using the my-app directive
 * @author Johannes Konert
 */
import {Component, OnInit} from '@angular/core';
/**  * Class to hold hero details. Will be soon in an own file  */

import { Hero } from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html',
    providers: [HeroService]
})
export class AppComponent implements OnInit {
      title: string = 'Tour Of Heroes';
      heroes: Hero [] = null;
      values: string = '';
      selectedHero: Hero = null;
      fightingHero: Hero;
      details: string = 'Hero-Details';
      villain: string;
      hideDetails: boolean = false;
      hideFight: boolean = true;

      constructor(private heroService: HeroService) {
      }

      /** Called by AngularJS after constructor and after injected services and child-components are set */
      ngOnInit(): void {
          this.heroes = this.heroService.getHeroes();
      }

      /**  assigns an Hero to the Component's "selectedHero" property by clicking onto one of the Heros, which are listed on
       * the *ngFor-generated hero list
       * @param the Hero that has been clicked last */
      onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.hideDetails = false;
        this.hideFight = true;
      }

    onFight(hero: Hero): void {
        this.fightingHero = hero;
        this.hideDetails = true;
        this.hideFight = false;
    }



  /** function to be toggled on keyUp in template input. Will extend this.values by current input value
   * @param event of input
   */
  // onKeyUp(event:any) {
  //   this.values += event.target.value + ' | ';
  // }


}
