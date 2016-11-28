/**
 * a sample component using the my-app directive
 * @author Johannes Konert
 */
import {Component, OnInit} from '@angular/core';
/**  * Class to hold hero details. Will be soon in an own file  */

import { Hero } from './hero';


/**
 * An array of Hero objects we want to display.
 * @type {{id: number; name: string; nickname: string; weapon: string; noArms: boolean}[]}
 */
const HEROES:Hero [] = [
  {id: 1, name: 'Windstorm', nickname: 'hurican', weapon: 'Sword', noArms: false},
  {id: 2, name: 'Donald Trump', nickname: 'Donald Trumpet', weapon: 'US-Air-Force', noArms: false},
  {id: 3, name: 'Batman', nickname: 'Bruce. pssst!', weapon: 'Knife', noArms: false},
  {id: 4, name: 'Thor', nickname: 'God', weapon: 'Hammer', noArms: false}
];

@Component({
  selector: 'my-app',
  styleUrls: ['app/app.component.css'],
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
  title:string;
  heroes:Hero [];
  values:string;
  selectedHero:Hero;
  fightingHero:Hero;
  details: string = "Hero-Details";
  villian: string;
  hideDetails:boolean = false;
  hideFight:boolean = true;

  onFight(hero:Hero):void {
    this.fightingHero = hero;
    this.hideDetails = true;
    this.hideFight = false;
  }


  constructor() {
    this.title = 'Tour Of Heroes';
    this.heroes = null;
    this.values = '';
    this.selectedHero = null;
  }

  /** demo on ngOnInit usage. Called by AngularJS after constructor */
  ngOnInit():void {
    this.heroes = HEROES;
  }

  /**  assigns an Hero to the Component's "selectedHero" property by clicking onto one of the Heros, which are listed on
   * the *ngFor-generated hero list
   * @param the Hero that has been clicked last */
  onSelect(hero:Hero):void {
    this.selectedHero = hero;
    this.hideDetails = false;
    this.hideFight = true;
  }



  /** function to be toggled on keyUp in template input. Will extend this.values by current input value
   * @param event of input
   */
  // onKeyUp(event:any) {
  //   this.values += event.target.value + ' | ';
  // }


}
