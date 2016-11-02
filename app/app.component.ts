/**
 * a sample component using the my-app directive
 * @author Johannes Konert
 */
//Importiere Components
import { Component } from '@angular/core';

//Eine Klasse die kein Component ist
export class Hero {
  id: number;
  name: string;
}

//Hallo Angular, die nun folgende Klasse ist ein Angular Component.
@Component({
	//Übrigens hat die Klasse auch noch diese Metadaten
    selector: 'my-app',
    //One Way Bindings, Two Way Bindings und Event-Binding mit $event variable
    // "`" kann man für multiline-strings benutzen.
    template: `
    		<h1>{{title}}</h1>
    		<h2>{{hero.name}} Details:</h2>
    		<div>
    			<label>Id: </label> {{hero.id}}
    		</div>
    		<div>
    			<label>Name: </label> <input [(ngModel)]="hero.name">
    		</div>
    		<button [disabled]=hero.noArms (click)="weaponChange()">change weapon!</button>
    		<div>
    			<Label> Weapon: </Label> {{hero.weapon}}
    		</div>
    		<div>
    			<input (keyup)="onKey($event)">
       			<p>{{values}}</p>
       		</div>
    `
})
export class AppComponent implements OnInit {
  //One Way Bind bezieht sich auf diese Variable
	title: string;
	hero: Hero;

	//Konstruktor wird vor ngOnInit() aufgerufen
	constructor() {
	  this.title = "Tour Of Heroes"
	  this.hero = {
	  	id: 1,
	  	name: "Windstorm",
	  	nickname: "Wind"
	  	weapon: "Klatsche",
	  }
	}

	//Lifecycle Hook, wird nach dem ersten ngOnChanges() aufgerufen
	ngOnInit() {
  		this.hero.noArms = false	
	}

	weaponChange(): void {
		this.hero.weapon = "Stinkefinger"
	}
	onKey(event:any) {
		this.values += event.target.value + ' | ';
	}
}
