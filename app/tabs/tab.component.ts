/**
 * A <tab> component is hosted inside a tabset to be activated by click.
 * Is using attribute title as title to be displayed (by tabset)
 * @author: Johannes Konert
 *
 * based on ng-book rev. 43, pages 450ff
 */

import { Component, Input } from "@angular/core";

@Component({ 
    selector: 'tab',
    template: `
        <div class="ui bottom attached tab segment">  
            <ng-content *ngIf="active"></ng-content>    
        </div>
        
        `
})

export class Tab {
    @Input() title: string;
    active: boolean = false;
}
