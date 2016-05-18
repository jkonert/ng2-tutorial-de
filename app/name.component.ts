/**
 * Created by Andreas Burger on 16.05.2016.
 */
import { Component, Input } from 'angular2/core';

@Component({
    selector: 'name-child',
    template: `
    <input value="{{name}}" placeholder="name">
  `
})
export class NameComponent {
    _name: string = '<no name set>';
    @Input()
    set name(name: string) {
        this._name = (name && name.trim()) || '<no name set>';
    }
    get name() { return this._name; }
    
}
