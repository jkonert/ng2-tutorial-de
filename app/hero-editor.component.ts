/**
 * Displays the Hero name for edit and lets use a RestoreService to cancel editing
 * @author Johannes Konert
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestoreService } from './restore.service';
import { Hero } from './hero';
@Component({
    selector: 'hero-editor',
    template: `        
          <span>Name:</span>
          <input [(ngModel)]="_hero.name"/>
          <div>
            <button (click)="onSaved()">save</button>
            <button (click)="onCanceled()">cancel</button>
          </div>
        `
})
export class HeroEditorComponent {
    @Output() canceled = new EventEmitter<Hero>();
    @Output() saved = new EventEmitter<Hero>();
    _hero: Hero;
    constructor(private restoreService: RestoreService<Hero>) {}
    @Input()
    set hero (hero: Hero) {
        this.restoreService.setItem(hero);
        this._hero = hero;

    }
    get hero () {
        return this._hero;
    }
    onSaved () {
        this.saved.emit(this.restoreService.getItem());
    }
    onCanceled () {
        this.hero = this.restoreService.restoreItem();
        this.canceled.emit(this.hero);
    }
}
