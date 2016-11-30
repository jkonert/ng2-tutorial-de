import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'weapon-history',
  template: `
    <h4>Weapon History:</h4>
    <ul>
      <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>
`
})

export class HeroWeaponHistory implements OnChanges{
  @Input() weapon;
  changeLog: string[]= [];

  ngOnChanges(inputChanges) {
    let log: string[] = [];
    if (inputChanges.weapon) {
      let from = inputChanges.weapon.previousValue;
      let to = inputChanges.weapon.currentValue;
      if (from == 'CD_INIT_VALUE'){ // check if object is empty.
        log.push( `Current Weapon is ${to}`);
      }else {
      log.push( `Weapon changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}
