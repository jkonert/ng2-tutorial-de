import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {HeroModule} from './hero/hero.module';
import {HeroService} from './hero/hero.service';
import { HttpModule } from "@angular/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from './hero/in-memory-data.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent
  ],

    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
