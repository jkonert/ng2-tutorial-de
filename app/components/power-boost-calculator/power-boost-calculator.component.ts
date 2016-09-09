import { Component } from '@angular/core';

import { ExponentialStrengthPipe } from '../../pipes/exponential-strength/exponential-strength.pipe.ts';

@Component({
    selector: 'power-boost-calculator',
    template: `
    <h2>Power Boost Calculator</h2>
    <ul class="items">
        <li class="item"><span class="badge">Normal power:</span> <input [(ngModel)]="power"></li>
        <li class="item"><span class="badge">Boost factor:</span> <input [(ngModel)]="factor"></li>
    </ul>
    <p>
      Super Hero Power: {{power | exponentialStrength: factor}}
    </p>
  `,
    pipes: [ExponentialStrengthPipe]
})
export class PowerBoostCalculator {
    power = 5;
    factor = 1;
}