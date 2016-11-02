/**
 * A hero and its details
 * @author Johannes Konert and contributing students
 */

import {Component, OnInit} from '@angular/core';

/**
 * Class to hold hero details. Will be soon in an own file
 */
class Hero {
  id: number;
  name: string;
  nickname: string;
  weapon: string;
  noArms: boolean;
}


@Component({
    selector: 'my-app',
    template: `
    		<h1>{{title}}</h1>
    		<h2>{{hero.name}} Details:</h2>
    		<div>
    			<label>Id: </label> {{hero.id}}
    		</div>
    		<div>
    			<label>Name: </label> <input [(ngModel)]="hero.name" placeholder="name">
    		</div>    		
    		<div>
    			<Label> Weapon: </Label> {{hero.weapon}}
    		</div>
    		<button [disabled]="hero.noArms" (click)="weaponChange()">Toggle weapon!</button>
    		<button (click)="hero.noArms=!hero.noArms">Toggle Hero armless</button>
    		<p>Demo of keyUp</p>
    		<div>
    			<input (keyup)="onKeyUp($event)">
       			<p>{{values}}</p>
       		</div>
    `
})
export class AppComponent implements OnInit {
	title: string;
	hero: Hero;
  values: string = '';

  constructor() {
	  this.title = 'Tour Of Heroes';
	  this.hero = {
	  	id: 1,
	  	name: 'Windstorm',
	  	nickname: 'Wind',
	  	weapon: 'Sword',
      noArms: true
	  };
	}

	/** demo on ngOnInit usage. Called by AngularJS after constructor */
	ngOnInit(): void {
  		this.hero.noArms = false;
	}

  /** called by template on button click. Willswitch between Sword and Axe */
	weaponChange(): void {
		switch (this.hero.weapon) {
      case 'Sword':
        this.hero.weapon = 'Axe';
        break;
      default:
      case 'Axe':
        this.hero.weapon = 'Sword';
        break;
    }
	}

  /**
   * function to be toggled on keyUp in template input. Will extend this.values by current input value
   * @param event of input
   */
	onKeyUp(event: any) {
		this.values += event.target.value + ' | ';
	}
}
