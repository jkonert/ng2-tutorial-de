export class InMemoryDataService {
    createDb() :any{
        let heroes = [
            {id: 11, name: 'Mr. Nice',age:100,placeOfResidence:"Berlin",favoriteWeapon:"Dagger"},
            {id: 12, name: 'Narco',age:200,placeOfResidence:"Saturn",favoriteWeapon:"Axt"},
            {id: 13, name: 'Bombasto',age:100,placeOfResidence:"Neptun",favoriteWeapon:"Handgun"},
            {id: 14, name: 'Celeritas',age:300,placeOfResidence:"Berlin",favoriteWeapon:"Spear"},
            {id: 15, name: 'Magneta',age:25,placeOfResidence:"NewYork",favoriteWeapon:"Sword"},
            {id: 16, name: 'RubberMan',age:20,placeOfResidence:"Berlin",favoriteWeapon:"Fire"},
            {id: 17, name: 'Dynama',age:500,placeOfResidence:"Mars",favoriteWeapon:"Handgun"},
            {id: 18, name: 'Dr IQ',age:100,placeOfResidence:"Berlin",favoriteWeapon:"Canon"},
            {id: 19, name: 'Magma',age:28,placeOfResidence:"Tokyo",favoriteWeapon:"Handgun"},
            {id: 20, name: 'Tornado',age:89,placeOfResidence:"Jupiter",favoriteWeapon:"Thunder"}
        ];
        return {heroes};
    }
}