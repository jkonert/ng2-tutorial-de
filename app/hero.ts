import {Injectable} from "@angular/core";
/**
 * Hero class with sample attributes
 *
 * @author András Bucsi, Jules Döring
 * @edited by Yeong-Cheol Jang
 */

export class Hero {
    public id               : number;
    private name            : string;
    private age             : number;
    private placeOfResidence: string;
    private favoriteWeapon  : string;
    private test  : string;
    private defaultHero : any=  {
        id  :0,
        name:"<default>",
        age:20,
        placeOfResidence: "<default>",
        favoriteWeapon: "<default>"
    }
    /**
     * Constructor with fixed parameters.
     * Default Parameters set for new Hero() Method.
     *
     * @param hero : object in the form of defaultHero
     * */
    constructor(hero? : any){
        if(hero){
            this.id = hero.id || this.defaultHero.id;
            this.name = hero.name ||this.defaultHero.name;
            this.age = hero.age || this.defaultHero.age;
            this.placeOfResidence = hero.placeOfResidence || this.defaultHero.placeOfResidence;
            this.favoriteWeapon = hero.favoriteWeapon|| this.defaultHero.favoriteWeapon ;
            this.test = "test"
        }
        else {
            let {id,name,age,placeOfResidence,favoriteWeapon} = this.defaultHero;

            this.id = id;
            this.name = name;
            this.age = age;
            this.placeOfResidence = placeOfResidence;
            this.favoriteWeapon = favoriteWeapon;

        }


    }
    // constructor (id:number = defaultHero.id,
    //              name:string = defaultHero.name,
    //              age:number = defaultHero.age,
    //              placeOfResidence:string = defaultHero.placeOfResidence,
    //              favoriteWeapon:string = defaultHero.favoriteWeapon) {
    //     this.id                 = id;
    //     this.name               = name;
    //     this.age                = age;
    //     this.placeOfResidence   = placeOfResidence;
    //     this.favoriteWeapon     = favoriteWeapon;
    //     this.test = "test"
    //
    // }
    static getId(hero : Hero) :number {return hero.id};
     static getName(hero : Hero) :string {return hero.name} ;
     static getAge = (hero : Hero) :number => hero.age;
    static getPlaceOfResidence = (hero : Hero) :string => hero.placeOfResidence;
    static getFavoriteWeapon = (hero : Hero) :string => hero.favoriteWeapon;
}