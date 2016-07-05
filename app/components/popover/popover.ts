/**
 * Created by helge on 04.07.16.
 */

import {Component} from "@angular/core";

@Component({
   selector: 'my-popover',
   template: `<span class="popover above">
                <ng-content></ng-content>               
              </span>`
})

export class PopoverComponent {
    
    constructor() {
        
    }
}
