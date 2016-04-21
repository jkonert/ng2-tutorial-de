/**
 * A sample component using the helloworld-app directive
 * @author Johannes Konert
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'helloworld-app',
    template: '<h1>{{name}} First Angular 2 App</h1>'
})
export class AppComponent {
    name: string;

    constructor() {
        this.name = "Johannes'";
    }
}