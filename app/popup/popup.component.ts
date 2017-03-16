/**
 * A directive to show popups on host elements using message attribute as input
 * @author: Johannes Konert
 *
 * based on ng-book rev. 43, pages 439ff
 */

import {Component, Input, HostListener, ViewEncapsulation} from '@angular/core';

@Component({
    selector: '[popup]',
    host: {
        'class':  'popup-host'
    },
    styleUrls: ['app/popup/popup.component.css'],
    encapsulation: ViewEncapsulation.None,
    template: `         
        <aside class="popover" [class.popover-active]="active">
            <div>{{ message }}</div>
        </aside>
        <ng-content></ng-content>                  
    `
})

export class Popup {
    active: boolean = false;

    @Input() message: String;
    @HostListener('mouseenter') onMouseEnter() {
        this.active = true;
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.active = false;
    }
}
