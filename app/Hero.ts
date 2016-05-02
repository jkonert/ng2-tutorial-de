/**
 * Hero class with sample attributes
 *
 * author András Bucsi, Jules Döring
 */
export class Hero{
    id              : number;
    name            : string;
    age             : number;
    placeOfResidence: string;
    favoriteWeapon  : string;

    /**
     * Constructor with fixed parameters
     * @param id
     * @param name
     * @param age
     * @param placeOfResidence
     * @param favoriteWeapon
     */
    constructor(id,name, age, placeOfResidence, favoriteWeapon){
        this.id                 = id;
        this.name               = name;
        this.age                = age;
        this.placeOfResidence   = placeOfResidence;
        this.favoriteWeapon     = favoriteWeapon
    }
}