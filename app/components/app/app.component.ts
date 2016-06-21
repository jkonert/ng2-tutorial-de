/**
 * Application component using the helloworld-app directive
 * Hero included and new directive my-hero-detail added
 *
 * @author Johannes Konert, András Bucsi, Jules Döring
 */
;
import {Component, OnInit}      from '@angular/core';
import {Hero}                   from '../../hero';
import {HeroDetailComponent}    from '../hero-detail/hero-detail.component.ts';
import {HeroFormComponent}    from '../hero-form/hero-form.component.ts';
import {HeroService}            from "../../services/hero/hero.service.ts";
import {HeroBirthday2}          from '../hero-birthday2/hero-birthday2.component.ts';
import {PowerBoostCalculator}   from '../power-boost-calculator/power-boost-calculator.component.ts';
import {HeroFormBuilderComponent} from '../hero-form/hero-formbuilder.components.ts'

@Component({
    selector: 'my-app',

    styleUrls: ['/hero-detail.component.css', '/app.component.css','/hero-form.component.css'],

    template: `<h1>{{title}}</h1>
                
                <ul class="items">
                        <li *ngFor="let hero of heroes" class="items" [class.selected]="hero === selectedHero" (click)="onSelect(hero)" onkeyup="0">
                            <span class="badge">{{hero.id}}</span>
                            {{hero.name}}
                            <button style="float: right;" class="delete-button" (click)="delete(hero, $event)">Delete</button>
                                                   
                        </li>
                </ul>
                
                 
                <button (click)="addHero()">Add New Hero</button>
                
               <!--<template [ngIf]="selectedHero" >-->
                 <!--<my-hero-form [hero]="selectedHero" (close)="close($event)"></my-hero-form>-->
                <!--</template>-->
                <template [ngIf]="selectedHero" >
                 <my-hero-form-builder *ngIf="addingHero==true " [hero]="selectedHero" (close)="close($event)" ></my-hero-form-builder>
                 <my-hero-form *ngIf="addingHero==false && selectedHero" [hero]="selectedHero" (close)="close($event)"></my-hero-form>


                </template>
                <!-- <div *ngIf="addingHero">-->
                <!--     <my-hero-detail [hero]="null" (close)="close($event)"></my-hero-detail>-->
                <!-- </div>-->
                <template [ngIf]="selectedHero"  *ngIf="addingHero == false">
                <div *ngIf="selectedHero">
                  <h2>
                    {{selectedHero.name | uppercase}} is my hero
                  </h2>
                </div> 
                 </template>
                <!--<template [ngIf]="selectedHero">-->
                       <hero-birthday2 *ngIf="selectedHero" [hero]="selectedHero"></hero-birthday2>
                <!--</template>-->
                <!--<template [ngIf]="selectedHero">-->
                    <!--<my-hero-detail [hero]="selectedHero"></my-hero-detail>-->
                <!--</template>-->
                <template [ngIf]="selectedHero">
                       <power-boost-calculator [hero]="selectedHero"></power-boost-calculator>        
                </template>`,
    // Angular doesn't know about the my-hero-detail tag, so we have to tell Angular to use the new directive
    directives: [HeroDetailComponent, HeroBirthday2, PowerBoostCalculator, HeroFormComponent,HeroFormBuilderComponent],
    providers: [HeroService] // tell Angular to inject the HeroService
})


export class AppComponent implements OnInit {
    private addingHero:boolean;
    private title:string; // Title of the app
    public selectedHero:Hero;   // selected hero from list
    private heroes:Hero[]; // Array for heroes

    /**
     * One way of assigning values to the variables: the constructor
     *
     * The HeroService will be injected here and is available in this component and all of its children.
     */
    constructor(private heroService:HeroService) {
        this.title = 'Tour of Heroes';
    }

    private close(savedHero:Hero) {
        console.log("FCCC");

        this.addingHero = false;
        if (savedHero) {
            this.getHeroes();
        }
    }

    /**
     * Get the heroes.
     */
    private delete(hero:Hero, event:any) {
        event.stopPropagation();
        this.heroService.delete(hero);
        this.getHeroes();
        if (this.selectedHero === hero) {
            this.selectedHero = null;
        }
    }

    private addHero() {
        this.selectedHero = new Hero();
        this.addingHero = true;

    }


    getHeroes() :void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }


    ngOnInit() {
        this.getHeroes();
    }

    /**
     * method the is called at event triggering (here at onClick)
     * The method assigns the passed hero-object to the variable selectedHero
     *
     * @param hero passed hero Object
     */
    private onSelect(selectedHero :Hero) {
        this.addingHero = false;
        this.selectedHero = selectedHero;
        console.log("selected",this.selectedHero);
    }
}
