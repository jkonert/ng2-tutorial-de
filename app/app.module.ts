import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroService} from "./hero/hero.service";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import "./rxjs-extensions";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppComponent} from "./app.component";
import {HeroModule} from "./hero/hero.module";
import {NameValidator} from "./hero/name-validator";
import {Popup} from './popup/popup.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        HeroModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        NameValidator,
        Popup
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}



