import {Component, Input}   from 'angular2/core';
import {Hero}              from './hero';
import {NameComponent} from './name.component';

@Component({
    selector: 'hero-birthday2',
    template: `
                  <p>The hero's birthday is {{ birthday | date:format | uppercase}}</p>
                  <button (click)="toggleFormat()">Toggle Date Format</button>
                `

})


export class HeroBirthday2 {

    private birthday = new Date();
    toggle = true; // start with true == shortDate

    get format()   { return this.toggle ? 'shortDate' : 'fullDate'}
    toggleFormat() { this.toggle = !this.toggle; }

}