/**
 * Module grouping TabSet and Tabs as exported components
 * @author: Johannes Konert
 *
 */

import {NgModule}      from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabSet} from "./tabset.component";
import {Tab} from "./tab.component";

@NgModule({
    imports: [CommonModule],
    declarations: [
        TabSet,
        Tab
    ],
    exports: [
        TabSet,
        Tab
    ]
})
export class TabsModule { }
