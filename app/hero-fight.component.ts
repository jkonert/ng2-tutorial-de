import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'hero-fight',
  styles: [`section {
                 border: #245899 solid;
                 background-color: rgba(7,104,161,0.37);
                 padding: 2em;
            }
            span {display: inline-block; margin: 0 0.5em;}
            .fight:active {            
              background-color: red;
              transform: translateY(-8px);}
            .defence:active {
              background-color: blue;
              transform: translateY(8px);}
`],
  template: `
                <section *ngIf="hero">      
                   <div>Mode:
                    <input type="radio" name="mode" (click)="mode='fight'">fight
                    <input type="radio" name="mode" (click)="mode='defence'">defence                   
                  </div>
                  <button [fightDirective] = "mode">{{hero.name}}</button>  
                  <span>VS</span>
                  <button [fightDirective] = "mode">{{villain}}</button>
                </section>
`,
})
export class HeroFightComponent {
  @Input() hero: Hero;
  @Input() villain;
}

