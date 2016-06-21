/**
 * HeroDetailComponent for the detailed view
 *
 * author Yeong-Cheol Jang
 */
import {Component, Input, OnInit, Output, EventEmitter}  from '@angular/core';
import {ControlGroup,FormBuilder,Validators} from "@angular/common";
import {Hero}              from '../../hero';
import {HeroService}         from "../../services/hero/hero.service.ts";
// import {Router} from "@angular/router";
@Component({
    selector : 'my-hero-form-builder',
    providers : [HeroService,FormBuilder],
    styleUrls:['/hero-form.component.css'],
    template: `
 <h2 >Hero {{hero.id ==0 ?  "creation":"edit" }} form with Formbuilder: </h2>
 
  <form (ngSubmit)="save()" [ngFormModel]="heroFormBuilder" >
  
  
  <ul class="items">
   <li class="item">
        <span class="badge"><label for="heroId-fb">ID:</label></span>
        <input 
            name="id"
            readonly 
            type="text" 
            id="heroId-fb" 
            [ngFormControl]="heroFormBuilder.controls['id']" 
             value="{{heroFormBuilder.controls['id'].value}}">

    </li> 
    <li class="item">
        <span class="badge"><label for="heroName-fb">Name of the hero:</label></span>
        <input 
             required
             name="name"
            type="text" 
            id="heroName-fb"                
            [ngFormControl]="heroFormBuilder.controls['name']"
            value="{{heroFormBuilder.controls['name'].value}}" 
            #name="ngForm">
    </li> 
                <span *ngIf="!name.valid">Invalid! must be longer than 3 letters</span>

    <li class="item">
        <span class="badge"><label for="heroAge-fb">Age of the hero:</label></span>
        <input 
             
             name="age"
            type="number" id="heroAge-fb" 
            [ngFormControl]="heroFormBuilder.controls['age']"
            value="{{heroFormBuilder.controls['age'].value}}">
    </li> 
    <li class="item">
        <span class="badge"><label for="heroPlaceOfResidence-fb">Place of residence</label></span>
        <input 
             name="placeOfResidence"
            type="text" 
            id="heroPlaceOfResidence-fb" 
            [ngFormControl]="heroFormBuilder.controls['placeOfResidence']"
            value="{{heroFormBuilder.controls['placeOfResidence'].value}}">
    </li> 
    <li class="item">
        <span class="badge"><label for="heroFavoriteWeapon-fb">Favorite Weapon:</label></span>
        <input 
             name="favoriteWeapon"
            type="text" 
            id="heroFavoriteWeapon-fb"
            [ngFormControl]="heroFormBuilder.controls['favoriteWeapon']"
            value="{{heroFormBuilder.controls['favoriteWeapon'].value}}" #spy>
    </li> 
  
  </ul>
  {{spy.className}}


<button type="submit" [disabled]="!heroFormBuilder.valid">Save</button>

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

export class HeroFormBuilderComponent implements OnInit {

    /**
     * Important for Binding, otherwise an error will be thrown
     */
     heroFormBuilder : ControlGroup;

    @Input() hero: Hero;
    @Output()
    close  = new EventEmitter();
    navigated :boolean = false;


    // constructor (private heroService: HeroService, private routeParams: RouteParams) {
    constructor (private heroService: HeroService, private formBuilder: FormBuilder) {
    }

    private save(){
        if (this.heroFormBuilder.valid) {
        this.heroService.save(this.heroFormBuilder.value).then(hero => {
            this.hero = new Hero(hero); // saved hero, w/ id if new
            this.close.emit(this.hero);
        })
        }

    }


    ngOnInit() :any {

        // this.heroService.getHero(this.hero? this.hero.id : 0).then(her=> this.hero = her);

        if (this.hero !== null ) {
            let id : number;
            id = this.hero.id || 0;
            this.heroService.getHero(id).then(hero => this.hero = new Hero( hero))

        //
        } else {
            // id = this.heroService.getHeroes().then(res => console.log("ngOnInit--------------------- ",res))
        //     this.navigated = false;
            this.hero = new Hero();
        }
        this.heroFormBuilder = this.formBuilder.group({
            id : [this.hero.id],
            name: [Hero.getName(this.hero),Validators.minLength(3) ],
            age : [Hero.getAge(this.hero),Validators.required],
            placeOfResidence : [Hero.getPlaceOfResidence(this.hero),Validators.required],
            favoriteWeapon:[Hero.getFavoriteWeapon(this.hero),Validators.required]


        })
        // console.log("++++++++++++++++++",id,this.hero)

    }


}