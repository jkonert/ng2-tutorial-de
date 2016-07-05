import { Component, Input } from "@angular/core";

@Component({ 
    selector: 'tab',
    inputs: ['title'],
    template: `
        <div> 
            <ng-content *ngIf="active"></ng-content>    
        </div>
        
        `
})

export class Tab {
    @Input('title') title: string;
    active: boolean = false;
    name: string;

    constructor() {}
}
