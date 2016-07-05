import { Component, AfterContentInit, QueryList, Query } from "@angular/core";
import { Tab } from "../tab/tab";

@Component({
    selector: 'tabset',
    template: `
                <div class="ui top attached tabular menu">
                    <a *ngFor="let tab of tabs" [class.active]="tab.active" (click)="setActive(tab)">
                        {{ tab.title }}
                    </a> 
                </div>
                <hr>
                <section>
                    <ng-content></ng-content>
                </section>           
` })
    
export class Tabset implements AfterContentInit {
    tabs: QueryList<Tab>;
    constructor(@Query(Tab) tabs:QueryList<Tab>) {
        this.tabs = tabs;
        console.log(this.tabs);
    }
    ngAfterContentInit() {
        this.tabs.toArray()[0].active = true;
    }
    setActive(tab: Tab) {
        console.log('clicked');
        this.tabs.toArray().forEach((t) => t.active = false);
        tab.active = true;
    }
}
