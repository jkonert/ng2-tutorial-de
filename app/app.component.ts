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
    //One Way Bindings, Two Way Bindings und Event-Binding.
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
    `
})
export class AppComponent {
  //One Way Bind bezieht sich auf diese Variable
  title = "Tour Of Heroes"
  hero: Hero {
  	id: 1,
  	name: "Windstorm",
  	noArms: false,
  	weapon: "Klatsche"
  }

  weaponChange(): void {
  	this.hero.weapon = "Stinkefinger"
  }
}
