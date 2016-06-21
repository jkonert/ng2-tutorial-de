/**
 * HeroForm editablity
 *
 * author Yeong-Cheol Jang
 */
import {Component, Input, OnInit, Output, EventEmitter}  from '@angular/core';

import {Hero}              from '../../hero';
import {HeroService}         from "../../services/hero/hero.service.ts";

@Component({
    selector : 'my-hero-form',
    providers : [HeroService],
    template:

`<h2>Hero {{hero.id == 0 ?  "creation":"edit" }} form:</h2> 
  <form >  
  <ul class="items">
   <li *ngIf="hero.id" class="item" >
        <span class="badge"><label for="heroId">ID:</label></span>
        <input 
             type="number" 
             id="heroId" 
             readonly
             [(ngModel)]="hero.id" 
             > 
    </li> 
    <li class="item">
        <span class="badge"><label for="heroName">Name:</label></span>
        <input 
            type="text" 
            id="heroName" 
            required
            [(ngModel)]="hero.name"  
            minlength="3" 
            >
    </li> 
    <li class="item">
        <span class="badge"><label for="heroAge">Age:</label></span>
        <input 
        required 
        type="number" 
        id="heroAge" 
        [(ngModel)]="hero.age"  
        #age>
    </li> 
    <li class="item">
        <span class="badge"><label for="heroPlaceOfResidence">Residence:</label></span>
        <input 
        required 
        type="text" id="heroPlaceOfResidence" 
        [(ngModel)]="hero.placeOfResidence"  
        #placeOfResidence>
    </li> 
    <li class="item">
        <span class="badge"><label for="heroFavoriteWeapon">Weapon:</label></span>
        <input 
        required 
        type="text" id="heroFavoriteWeapon" 
        [(ngModel)]="hero.favoriteWeapon"  
        #favoriteWeapon
        #spy>
    </li> 
  {{spy.className}}
  </ul>
<button  (click)="save(hero)">save</button>

</form>`,
    styles:[`
    .item {
    display: flex;        
    }
    .item span {
    flex-grow: 1;
    }
    .item input{
    max-width: 100%;
    }
    
   input.ng-invalid {
    border: 1px solid indianred;
    }
    input.ng-untouched {
    border: 1px solid teal;
    }
    
    `]

})

export class HeroFormComponent implements OnInit {

    /**
     * Important for Binding, otherwise an error will be thrown
     */

    @Input()
    hero: Hero;
    @Output()
    close = new EventEmitter();

    // navigated = false; // true if navigated here


    // constructor (private heroService: HeroService, private routeParams: RouteParams) {
    constructor (private heroService: HeroService) {
    }

    private save(hero:Hero){

        this.heroService.save(hero).then(hero => {
            this.hero = hero; // saved hero, w/ id if new
            this.close.emit(hero);
        })

    }

    ngOnInit() {
        if (this.hero !== null && !isNaN(this.hero.id)) {
            console.log("-----------------",this.hero,this.hero.id)
            let id :number= +this.hero.id || 0;
        //     this.navigated = true;
            this.heroService.getHero(id)
                .then(hero => this.hero = new Hero(hero));
        } else {
            // this.navigated = false;
            this.hero = new Hero();
        }
    }


}