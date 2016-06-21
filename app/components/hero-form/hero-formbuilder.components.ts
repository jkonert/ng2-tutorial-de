/**
 * HeroFormBuilder for editability
 *
 * author Yeong-Cheol Jang
 */
import {Component, Input, OnInit, Output, EventEmitter}  from '@angular/core';
import {ControlGroup,FormBuilder,Validators} from "@angular/common";
import {Hero}              from '../../hero';
import {HeroService}         from "../../services/hero/hero.service.ts";
import HeroNameValidator from "../../validators/heroNameValidator";
// import {Router} from "@angular/router";
@Component({
    selector : 'my-hero-form-builder',
    providers : [HeroService],
    styleUrls:['/hero-form.component.css'],
    template: `
 <h2 >Hero {{hero.id ==0 ?  "creation":"edit" }} form with Formbuilder: </h2>
 
  <form *ngIf="hero" (ngSubmit)="save()" [ngFormModel]="heroFormBuilder" >
  
  
  <ul class="items">
   <li class="item" *ngIf="hero.id">
        <span class="badge"><label for="heroId-fb">ID:</label></span>
        <input 
            name="id"
            readonly 
            type="text" 
            id="heroId-fb" 
            [ngFormControl]="heroFormBuilder.controls['id']" 
            >

    </li> 
    <li class="item">
        <span class="badge"><label for="heroName-fb">Name of the hero:</label></span>
        <input 
             required
             name="name"
            type="text" 
            id="heroName-fb"                
            [ngFormControl]="heroFormBuilder.controls['name']"
             
            #name="ngForm" 
            #spy>
    </li> 
                <span *ngIf="!name.valid" class="error-span">Invalid! must be > 3  && <=8 characters and may not start with a number</span>

    <li class="item">
        <span class="badge"><label for="heroAge-fb">Age of the hero:</label></span>
        <input 
             
             name="age"
            type="number" id="heroAge-fb" 
            [ngFormControl]="heroFormBuilder.controls['age']"
            placeholder="{{heroFormBuilder.controls['age'].value}}">
    </li> 
    <li class="item">
        <span class="badge"><label for="heroPlaceOfResidence-fb">Place of residence</label></span>
        <input 
             name="placeOfResidence"
            type="text" 
            id="heroPlaceOfResidence-fb" 
            [ngFormControl]="heroFormBuilder.controls['placeOfResidence']"
            
            #placeOfResidence="ngForm">
            
    </li> 
                <span  *ngIf="!placeOfResidence.valid" class="error-span">Invalid! must be exactly 5 alphanumeric character long</span>
    <li class="item">
        <span class="badge"><label for="heroFavoriteWeapon-fb">Favorite Weapon:</label></span>
        <input 
             name="favoriteWeapon"
            type="text" 
            id="heroFavoriteWeapon-fb"
            [ngFormControl]="heroFormBuilder.controls['favoriteWeapon']"
            placeholder="{{heroFormBuilder.controls['favoriteWeapon'].value}}"
            #favoriteWeapon="ngForm">
    </li> 
  
  </ul>
  {{spy.className}}


<button type="submit" [disabled]="!heroFormBuilder.valid">Save</button>

</form>`,
    styles:[`
ul span.error-span{
    color : red;
    font-size: 10pt;
    padding-top: 3px;
    padding-left: 5px;
}
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

export class HeroFormBuilderComponent implements OnInit {

    /**
     * Important for Binding, otherwise an error will be thrown
     */

    @Input() hero: Hero;
    @Output()
    close  = new EventEmitter();
    navigated :boolean = false;


    // constructor (private heroService: HeroService, private routeParams: RouteParams) {
    constructor (private heroService: HeroService, private formBuilder: FormBuilder) {
    }
    heroFormBuilder : ControlGroup;

    private save(){
        if (this.heroFormBuilder.valid) {
        this.heroService.save(this.heroFormBuilder.value).then(hero => {
            this.hero = new Hero(hero); // saved hero, w/ id if new
            this.heroFormBuilder=this.initHeroFormBuilder(this.hero)
            this.close.emit(this.hero);
        })


        }

    }

initHeroFormBuilder(hero : Hero) :ControlGroup {
    return  this.formBuilder.group({
        id : [hero.id],
        name: [
            Hero.getName(hero),
            Validators.compose([
                Validators.maxLength(8),
                Validators.minLength(3),
                Validators.required,
                HeroNameValidator.startsWithNumber
            ]) ],
        age : [Hero.getAge(hero),Validators.required],
        placeOfResidence : [Hero.getPlaceOfResidence(hero),Validators.pattern('[A-Za-z0-9]{5}')],
        favoriteWeapon:[Hero.getFavoriteWeapon(hero),Validators.required]


    })

}
    ngOnInit() :any {


        if (this.hero !== null ) {
            let id : number;
            id = this.hero.id || 0;
            this.heroService.getHero(id).then(hero => this.hero = new Hero( hero))

        //
        } else {

            this.hero = new Hero();
        }
        this.heroFormBuilder= this.initHeroFormBuilder(this.hero);



    }

}