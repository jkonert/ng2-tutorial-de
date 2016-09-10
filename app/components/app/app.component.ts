/**
 * Application component using the helloworld-app directive
 * Hero included and new directive my-hero-detail added
 *
 */
;
import {Component, OnInit, ViewEncapsulation}      from '@angular/core';
import {Hero}                   from '../../hero';
import {HeroDetailComponent}    from '../hero-detail/hero-detail.component';
import {HeroFormComponent}    from '../hero-form/hero-form.component';
import {HeroService}            from "../../services/hero/hero.service";
import {HeroBirthday2}          from '../hero-birthday2/hero-birthday2.component';
import {PowerBoostCalculator}   from '../power-boost-calculator/power-boost-calculator.component';
import {HeroFormBuilderComponent} from '../hero-form/hero-formbuilder.components';
import {Popup} from '../../directives/popup.directive';
import {PopoverComponent} from '../popover/popover';
import {Tabset} from '../tabset/tabset';
import {Tab} from '../tab/tab';

@Component({
    selector: 'my-app',
    template: `
                <tabset>
                    <tab title="Hero List /">
                        <li *ngFor="let hero of heroes" class="items" [class.selected]="hero === selectedHero" (click)="onSelect(hero)" onkeyup="0">
                            <span popup title="{{hero.name}}">{{hero.id}}
                                <my-popover>Age: {{ hero.age }}<br>Weapon: {{ hero.favoriteWeapon }}</my-popover>
                            </span>
                            {{hero.name}} 
                            <button style="float: right;" class="delete-button" (click)="delete(hero, $event)">Delete</button>                       
                        </li>
                    </tab>                 
                    
                    
                    <tab title="{{ getEditTitle() }} /">
                        <button (click)="addHero()">
                            Add New Hero
                        </button>
                        
                       <!-- showing form-builder usage -->
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
                        
                        <!-- showing the usage of self-written pipes with parameters -->
                        <template [ngIf]="selectedHero">
                               <power-boost-calculator [hero]="selectedHero"></power-boost-calculator>        
                        </template>
                    </tab>
                    
                    <!-- List of tabs dynamically -->
                    <tab *ngFor="let tab of tabs" title="{{tab.title}} /">
                        {{ tab.content }} 
                    </tab>
                    
                    <!-- static tab for testing popovers -->
                    <tab title="Popover Test">                        
                        <br>
                        <div popup title="Hello" #p1="popup">                            
                            X
                            <my-popover>Popover Content</my-popover>
                        </div>                        
                        <button (click)="p1.displayPopover()">
                            Click to trigger Popover
                        </button>
                    </tab>
                </tabset>                    
                `,
    // Angular doesn't know about the my-hero-detail tag, so we have to tell Angular to use the new directive
    directives: [HeroDetailComponent, HeroBirthday2, PowerBoostCalculator, HeroFormComponent, HeroFormBuilderComponent, Popup, PopoverComponent, Tabset, Tab],
    providers: [HeroService] // tell Angular to inject the HeroService
})


export class AppComponent implements OnInit {
    private addingHero: boolean;
    private title: string; // Title of the app
    public selectedHero: Hero;   // selected hero from list
    private heroes: Hero[]; // Array for heroes
    tabs: any;



    /**
     * One way of assigning values to the variables: the constructor
     *
     * The HeroService will be injected here and is available in this component and all of its children.
     */
    constructor(private heroService: HeroService) {
        this.title = 'Tour of Heroes';
        this.tabs = [
            { title: 'About', content: 'This is the About tab' },
            { title: 'Blog', content: 'This is our blog' },
            { title: 'Contact us', content: 'Contact us here' },
        ];
    }

    /**
     *  Used by Tabset to get a dynamic title for Edit-Tab
     * @returns {string}
     */
    private getEditTitle() {
        return this.selectedHero ? 'Edit ' + this.selectedHero.name : 'Add new Hero';
    }

    private close(savedHero: Hero) {
        console.log("saved Hero: ", savedHero);
        
        if (savedHero) {
            this.selectedHero = savedHero;
            this.getHeroes();
        }
        this.addingHero = false;
    }

    /**
     * Get the heroes.
     */
    private delete(hero: Hero, event: any) {
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


    getHeroes(): void {
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
    private onSelect(selectedHero: Hero) {
        this.addingHero = false;
        this.selectedHero = selectedHero;
        console.log("selected", this.selectedHero);
    }
}
