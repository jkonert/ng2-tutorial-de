import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {HeroModule} from './hero/hero.module';
import {HeroService} from './hero/hero.service';


@NgModule({
  imports: [ BrowserModule, FormsModule, HeroModule ],
  declarations: [
    AppComponent
  ],

    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
