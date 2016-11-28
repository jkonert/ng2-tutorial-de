import {Component, Input, EventEmitter, Output} from '@angular/core';
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
                        <label> Name: </label> <input [(ngModel)]="hero.name" placeholder="name"/>
                       
                    </div>      
                    <div>
                        <label> Weapon: </label> {{hero.weapon}}
                    </div>
                    <div>
                        <label> Villain: </label> <input #villainInput (keyup)="onKeyup(villainInput.value)" placeholder="villain"/>
                    </div>  
                    
                    <button (click)="hero.noArms = !hero.noArms">Toogle Hero armless</button>                   
                    <button [disabled]="hero.noArms" (click)="weaponChange()">Toogle weapon!</button>

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
  @Output() addVillain: EventEmitter<string> = new EventEmitter<string>();

  onKeyup(value: string) {
    this.addVillain.emit(value);
  }

  /** called by template on button click. Will switch between Sword and Axe for the hero with the id "1" */
  weaponChange(): void {
    switch (this.hero.weapon) {
      case 'Sword':
        this.hero.weapon = 'Axe';
        break;
      case 'Axe':
        this.hero.weapon = 'Sword';
        break;
      default:
        this.hero.weapon = 'Sword';
    }
  }

  get weapon(): string {
    return this.hero.weapon;
  }
}

