import { Component, AfterContentInit, QueryList, Query } from "@angular/core";
import { Tab } from "../tab/tab";

@Component({
    selector: 'tabset',
    template: `
                <!--tab header-->
                <div class="ui top attached tabular menu">
                    <a *ngFor="let tab of tabs" [class.active]="tab.active" (click)="setActive(tab)">
                        {{ tab.title }}
                    </a> 
                </div>
                <hr>
                <!--tabs-->
                <section>
                    <ng-content></ng-content>
                </section>           
` })
    
export class Tabset {

    tabs: QueryList<Tab>;

    constructor(@Query(Tab) tabs:QueryList<Tab>) {
        // query childeren
        this.tabs = tabs;
    }

    ngAfterContentInit() {
        // init tabs
        this.tabs.toArray()[0].active = true;
    }

    setActive(tab: Tab) {
        // set clicked tab as active
        this.tabs.toArray().forEach((t) => t.active = false);
        tab.active = true;
    }
}