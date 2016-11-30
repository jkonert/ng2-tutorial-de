/**
 * a sample component using the my-app directive
 * @author Johannes Konert
 */
import {Component, OnInit} from '@angular/core';
/**  * Class to hold hero details. Will be soon in an own file  */

import { Hero } from './hero/hero';


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
  styles: [`
              .selected {
                background-color: #CFD8DC !important;
                color: white;
              }
              .heroes {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 25em;
               
              }
              .heroes li {
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
              }
              .heroes li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
              }
              .heroes li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
              }
              .heroes .text {
                position: relative;
                top: -3px;
              }
              .heroes .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0 0 4px;
              }
              
              button {
              float: right;
              background-color: white;
              margin: 0 5px;
              }

    `],
  template: `
                <h1>{{title}}</h1>
                <p>Current villian is: {{villian}}</p>
                <h2>Choose your hero</h2>
                <ul class="heroes">              
                  <li *ngFor="let hero of heroes; let i = index" [class.selected]="hero === selectedHero"  >
                        <span class="badge">{{hero.id}}</span> {{hero.name}}
                        <button (click)="onFight(hero)">Fight</button>
                        <button (click)="onSelect(hero)">Details</button>                       
                  </li>
                </ul>
               
  <my-hero-detail [toChild]="parentValue" [hidden]="hideDetails" [hero]="selectedHero" [details]="details" (addVillian)="villian = $event" ></my-hero-detail>
  <hero-fight [hidden]="hideFight" [villian]="villian" [hero]="fightingHero"></hero-fight>
  
    `
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
  parentValue: string = "This is a Parent-Value";

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
