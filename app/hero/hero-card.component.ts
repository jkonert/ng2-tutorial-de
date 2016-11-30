/**
 * displays a Heroes name as a card (no editing) for listing
 * @author Johannes Konert
 */
import { Component, Input } from '@angular/core';
import { Hero } from './hero';
@Component({
    selector: 'hero-card',
    template: `
        <span>Name:</span>
        <span>{{hero.name}}</span>
        `
})
export class HeroCardComponent {
    @Input() hero: Hero;
}
