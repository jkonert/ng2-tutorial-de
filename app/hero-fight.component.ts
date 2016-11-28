import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'hero-fight',
  styles: [`.fight:active {
              background-color: red;
              transform: translateY(-8px);}
            .defence:active {
              background-color: blue;
              transform: translateY(8px);}
`],
  template: `
                <div *ngIf="hero">      
                   <div>
                    <input type="radio" name="mode" (click)="mode='fight'">fight
                    <input type="radio" name="mode" (click)="mode='defence'">defence                   
                  </div>
                    <button [fightDirective] = "mode">{{hero.name}}</button>  
                    <h1>VS</h1>
                    <button [fightDirective] = "mode">{{villain}}</button>
                </div>
`,
})
export class HeroFightComponent {
  @Input() hero: Hero;
  @Input() villain;
}

