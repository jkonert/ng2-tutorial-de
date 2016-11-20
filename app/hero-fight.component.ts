import {Component, Input, EventEmitter, Output} from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-fight',
  template: `
                <div *ngIf="hero">                
                    <h2>{{hero.name}}</h2>  
                    <h2>{{villian}}</h2>
                </div>
`
})
export class HeroFightComponent {
  @Input() hero: Hero;
  @Input() villian;

}

