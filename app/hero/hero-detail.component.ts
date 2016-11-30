import {Component, Input, EventEmitter, Output} from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero/hero-detail.component.html'
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

