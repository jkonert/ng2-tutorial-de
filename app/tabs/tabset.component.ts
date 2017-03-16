/**
 * A <tabset> component can host several <tab> components and switches between them on click
 * @author: Johannes Konert
 *
 * based on ng-book rev. 43, pages 450ff
 *
 * CSS is based on Semantic UI http://semantic-ui.com/modules/tab.html#/examples
 */

import {Component, AfterContentInit, QueryList, ContentChildren} from "@angular/core";
import { Tab } from "./tab.component";

@Component({
    selector: 'tabset',
    styleUrls: ['app/tabs/tabset.component.semantic.min.css'],
    template: `
                <!--tab header-->
                <nav class="ui top attached tabular menu">
                    <a *ngFor="let tab of tabs" 
                        class="item" [class.active]="tab.active" 
                        (click)="setActive(tab)">
                        {{ tab.title }}
                    </a> 
                </nav>
                <!--tabs-->
                <section>
                    <ng-content></ng-content>
                </section>
                           
` })
    
export class TabSet implements AfterContentInit {

    @ContentChildren(Tab) tabs: QueryList<Tab>;

    constructor() {
    }

    ngAfterContentInit() {
        this.setActive(this.tabs.first);
    }
    setActive(tab: Tab) {
        this.tabs.toArray().forEach((t) => t.active = false);
        tab.active = true;
    }
}
