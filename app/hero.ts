/**
 * Hero class with sample attributes
 *
 * author András Bucsi, Jules Döring
 */
export class Hero {
    public id               : number;
    private name            : string;
    private age             : number;
    private placeOfResidence: string;
    private favoriteWeapon  : string;

    /**
     * Constructor with fixed parameters.
     * Default Parameters set for new Hero() Method.
     *
     * @param id
     * @param name
     * @param age
     * @param placeOfResidence
     * @param favoriteWeapon
     */
    constructor (id:number = 0, name:string = "<default>", age:number = 20, placeOfResidence:string = "<default>", favoriteWeapon:string = "<default>") {
        this.id                 = id;
        this.name               = name;
        this.age                = age;
        this.placeOfResidence   = placeOfResidence;
        this.favoriteWeapon     = favoriteWeapon
    }


}