/**
 */

import {Component, ViewEncapsulation} from "@angular/core";

@Component({
   selector: 'my-popover',
   styleUrls: ['app/components/popover/popover.component.css'],
   encapsulation: ViewEncapsulation.None, // let styles be active outside of this component
   template: `<span class="popover above" [class.popover-active]="active">
                <div class="poptitle">{{ title }}</div>
                <ng-content></ng-content>               
              </span>`
})

export class PopoverComponent {
    active: boolean = false;
    title: string;
    constructor() {
        
    }
}
