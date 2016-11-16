/**
 * a sample component using the my-app directive
 * @author Johannes Konert
 */
import {Component, OnInit} from '@angular/core';
/**  * Class to hold hero details. Will be soon in an own file  */

export class Hero {
    id: number;
    name: string;
    nickname: string;
    weapon: string;
    noArms: boolean;
}


/**
 * An array of Hero objects we want to display.
 * @type {{id: number; name: string; nickname: string; weapon: string; noArms: boolean}[]}
 */
const HEROES: Hero [] = [
    {id: 1, name: 'Windstorm', nickname: '', weapon: 'Sword', noArms: true },
    {id: 2, name: 'Donald Trump', nickname: '', weapon: 'US-Air-Force', noArms: true},
    {id: 3, name: 'Batman', nickname: '', weapon: 'Knife', noArms: true},
    {id: 4, name: 'Thor', nickname: '', weapon: 'Hammer', noArms: true}
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
                width: 15em;
              }
              .heroes li {
                cursor: pointer;
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
    `],
    template: `
                <h1>{{title}}</h1>
                <ul class="heroes">
                
                <!-- for-loop to output each element of the component's "heroes" property as a <li>, to which a HERO[] has been
                assigned by the ngOnInit() method. let i = index allows accessing the list's index.
                The index starts at 1 and gets inserted automatically at the beginning of each <li> innerHTML -->
                    <li *ngFor="let hero of heroes; let i = index" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
                        <span class="badge">{{hero.id}}</span> {{hero.name}}                 
                    </li>
                </ul>
                
                <!-- the component's property "selectedHero" has the initial value "null" after the component was loaded.
                As long as "selectedHero" is null, the section'S code is not getting inserted into the DOM.
                By clicking onto one of the Heros, this Hero gets assigned to "selectedHero" and the section gets rendered
                displaying the related Hero's value.-->
                <div *ngIf="selectedHero">                
                    <h2>{{selectedHero.name}} Details</h2>  
                    <div>
                        <label>Id: </label> {{selectedHero.id}} 
                    </div>                
                    <div>
                        <label> Name: </label> <input ([ngModel])="selectedHero.name" placeholder="name">
                    </div>      
                    <div>
                        <label> Weapon: </label> {{selectedHero.weapon}}
                    </div>
                    
                    <button (click)="selectedHero.noArms =! selectedHero.noArms">Toogle Hero armless</button> 
                                          
                    <!-- Here are various ways shown of how to add a button and also other additional HTML code to a 
                    component using [ngSwitch]. Notice that in each case the button refers to a different weaponChange
                    method(), which is specified for a certain hero. -->                    
                    <div [ngSwitch]="selectedHero.id">
                        <div *ngSwitchCase="1">
                            <button [disabled]="selectedHero.noArms" (click)="weaponChange1()">Toogle weapon!</button>
                            <div> Random Div</div>
                        </div>                       
                        <div *ngSwitchCase="2">
                            <button [disabled]="selectedHero.noArms" (click)="weaponChange2()">Toogle weapon!</button>
                            <p>Random Paragaph</p>
                            <p>Random Paragaph</p>
                        </div>                        
                        <div *ngSwitchCase="3">
                            <button [disabled]="selectedHero.noArms" (click)="weaponChange3()">Toogle weapon!</button>
                        </div>                      
                        <button *ngSwitchCase="4" [disabled]="selectedHero.noArms" (click)="weaponChange4()">Toogle weapon!</button>
                        
                        <!-- Example of a default case -->
                        <p *ngSwitchDefault>Dieser Held existiert nicht.</p>
                    </div>  
              
                </div>
                <!-- As long as no Hero has been assigned to "selecteHero" its value is ´"nul" and therefore as "falsy". In this case the <div> below gets
                inserted into the DOM instead -->
                <div *ngIf="!selectedHero">
                    <p>Wähle einen Helden aus.</p>
                </div>
                <div>
                    <p>Demo of keyUp</p>
                    <input (keyup)="onKeyUp($event)">
                    <p>{{values}}</p>
                </div>

    `
})
export class AppComponent implements OnInit {
    title: string;
    heroes: Hero [];
    values: string;
    selectedHero: Hero;


    constructor() {
        this.title = 'Tour Of Heroes';
        this.heroes = null;
        this.values = '';
        this.selectedHero = null;
    }

    /** demo on ngOnInit usage. Called by AngularJS after constructor */
    ngOnInit(): void {
        this.heroes = HEROES;
    }

    /**  assigns an Hero to the Component's "selectedHero" property by clicking onto one of the Heros, which are listed on
     * the *ngFor-generated hero list
     * @param the Hero that has been clicked last */
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    /** called by template on button click. Will switch between Sword and Axe for the hero with the id "1" */
        weaponChange1(): void {
        switch (this.selectedHero.weapon) {
            case 'Sword':
                this.selectedHero.weapon = 'Axe';
                break;
            case 'Axe':
                this.selectedHero.weapon = 'Sword';
                break;
        }
    }

    /** called by template on button click. Will switch between US-Air-Force and US-Navy for the hero with the id "2" */
    weaponChange2(): void {
        switch (this.selectedHero.weapon) {
            case 'US-Air-Force':
                this.selectedHero.weapon = 'US-Navy';
                break;
            case 'US-Navy':
                this.selectedHero.weapon = 'US-Air-Force';
                break;
        }
    }

    /** called by template on button click. Will switch between Knife and Pistole for the hero with the id "3" */
    weaponChange3(): void {
        switch (this.selectedHero.weapon) {
            case 'Knife':
                this.selectedHero.weapon = 'Pistole';
                break;
            case 'Pistole':
                this.selectedHero.weapon = 'Knife';
                break;
        }
    }

    /** called by template on button click. Will switch between Hammer and Nail for the hero with the id "4" */
    weaponChange4(): void {
        switch (this.selectedHero.weapon) {
            case 'Hammer':
                this.selectedHero.weapon = 'Nail';
                break;
            case 'Nail':
                this.selectedHero.weapon = 'Hammer';
                break;
        }
    }

    /** function to be toggled on keyUp in template input. Will extend this.values by current input value
     * @param event of input
    */
    onKeyUp(event: any) {
        this.values += event.target.value + ' | ';
    }


}
