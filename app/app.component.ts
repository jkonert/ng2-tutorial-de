/**
 * a sample component using the my-app directive
 * @author Johannes Konert
 */
//Importiere Components
import { Component } from '@angular/core';

//Hallo Angular, die nun folgende Klasse ist ein Angular Component.
@Component({
	//Übrigens hat die Klasse auch noch diese Metadaten
    selector: 'my-app',
    //Unser erster One-Way Bind
    template: '<h1>{{name}} First Angular App</h1>'
})
export class AppComponent {
  //One Way Bind bezieht sich auf diese Variable
  name: string;

  //Konstruktor initalisiert die Klasse
  constructor() {
    this.name = 'Our';
  }
}
