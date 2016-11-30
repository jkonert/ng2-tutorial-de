import {Component, Input, EventEmitter, Output} from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero/hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input() hero: Hero;
  @Input('details') irgendEinName: string;
  @Input('toChild') parentValue;
  @Output() addVillian: EventEmitter<string> = new EventEmitter<string>();

  onKeyup(value: string){
    this.addVillian.emit(value);
  }


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
  public get weapon(): string {
    return this.hero.weapon;
  }
}

