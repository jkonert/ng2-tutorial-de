/**
 */

import { Directive, ElementRef, Input, HostListener, Renderer } from '@angular/core';
import { QueryList, Query } from '@angular/core';
import { PopoverComponent } from '../components/popover/popover'

@Directive({
    selector: '[popup]',
    inputs: ['title'],
    exportAs: 'popup',
    // host: {
    //     '(click)' : 'displayPopover()',
    //     // '(mouseenter)' : 'displayPopover()',
    //     // '(mouseleave)' : 'hidePopover()'
    // }
})

export class Popup {
    title: string;
    popovers: QueryList<PopoverComponent>;
    popover: PopoverComponent;

    //@Input('title') title: String;

    @HostListener('mouseenter') onMouseEnter() {
        this.displayPopover();
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hidePopover();
    }

    constructor(el: ElementRef, @Query(PopoverComponent) popovers:QueryList<PopoverComponent>, renderer: Renderer) {
        this.popovers = popovers;
        renderer.setElementClass(el.nativeElement, "qs", true);
    }

    ngAfterContentInit() {
        this.popover = this.popovers.toArray()[0];
        this.popover.title = this.title;
    }

    displayPopover(): void {
        this.popover.active = true;
    }

    hidePopover(): void {
        this.popover.active = false;
    }
}