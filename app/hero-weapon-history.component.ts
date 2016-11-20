import {Component, Input, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'weapon-history',
  template: `
    <h4>Hero Weapon History:</h4>
    <ul>
      <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>
`
})

export class HeroWeaponHistory implements OnChanges{
  @Input() weapon;
  changeLog: string[]= [];

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let from = JSON.stringify(changedProp.previousValue);
      let to =   JSON.stringify(changedProp.currentValue);
      log.push( `${propName} changed from ${from} to ${to}`);
    }
    this.changeLog.push(log.join(', '));
  }
}
