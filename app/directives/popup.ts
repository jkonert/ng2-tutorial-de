/**
 * Created by helge on 03.07.16.
 */

import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { PopoverComponent } from '../components/popover/popover'

@Directive({
    selector: '[popup]',
    inputs: ['message'],
    // host: {
    //     '(click)' : 'displayMessage()'
    // }
})

export class Popup {
    message: String;

    @HostListener('click') onClick() {
        this.displayMessage();
    }

    constructor(el: ElementRef, private viewContainer: ViewContainerRef) {

    }

    ngOnInit() {

    }

    displayMessage(): void {
        alert(this.message);
        var popover = new PopoverComponent();
    }

}