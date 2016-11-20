import {Component, Input} from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
                <div *ngIf="hero">                
                    <h2>{{hero.name}} {{irgendEinName}}</h2>  
                    <div>
                        <label>Id: </label> {{hero.id}} 
                    </div>                
                    <div>
                        <label> Name: </label> <input ([ngModel])="hero.name" placeholder="name">
                    </div>      
                    <div>
                        <label> Weapon: </label> {{hero.weapon}}
                    </div>
                    
                    <button (click)="hero.noArms =! hero.noArms">Toogle Hero armless</button> 
                  
                    <div [ngSwitch]="hero.id">
                        <div *ngSwitchCase="1">
                            <button [disabled]="hero.noArms" (click)="weaponChange1()">Toogle weapon!</button>
                        </div>                       
                        <div *ngSwitchCase="2">
                            <button [disabled]="hero.noArms" (click)="weaponChange2()">Toogle weapon!</button>
                        </div>                        
                        <div *ngSwitchCase="3">
                            <button [disabled]="hero.noArms" (click)="weaponChange3()">Toogle weapon!</button>
                        </div>                      
                        <button *ngSwitchCase="4" [disabled]="hero.noArms" (click)="weaponChange4()">Toogle weapon!</button>
                       
                        <p *ngSwitchDefault>Dieser Held existiert nicht.</p>
                    </div>  
              <weapon-history [weapon]="weapon"></weapon-history>
                </div>
                <div *ngIf="!hero">
                    <p>Wähle einen Helden aus.</p>
                </div>
`
})
export class HeroDetailComponent {
  @Input() hero: Hero;
  @Input('details') irgendEinName: string;


  /** called by template on button click. Will switch between Sword and Axe for the hero with the id "1" */
  weaponChange1():void {
    switch (this.hero.weapon) {
      case 'Sword':
        this.hero.weapon = 'Axe';
        break;
      case 'Axe':
        this.hero.weapon = 'Sword';
        break;
    }
  }

  /** called by template on button click. Will switch between US-Air-Force and US-Navy for the hero with the id "2" */
  weaponChange2():void {
    switch (this.hero.weapon) {
      case 'US-Air-Force':
        this.hero.weapon = 'US-Navy';
        break;
      case 'US-Navy':
        this.hero.weapon = 'US-Air-Force';
        break;
    }
  }

  /** called by template on button click. Will switch between Knife and Pistole for the hero with the id "3" */
  weaponChange3():void {
    switch (this.hero.weapon) {
      case 'Knife':
        this.hero.weapon = 'Pistole';
        break;
      case 'Pistole':
        this.hero.weapon = 'Knife';
        break;
    }
  }

  /** called by template on button click. Will switch between Hammer and Nail for the hero with the id "4" */
  weaponChange4():void {
    switch (this.hero.weapon) {
      case 'Hammer':
        this.hero.weapon = 'Nail';
        break;
      case 'Nail':
        this.hero.weapon = 'Hammer';
        break;
    }
  }
  get weapon(): string {
    return this.hero.weapon;
  }
}

