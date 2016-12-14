import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService{
    createDb() {
        let heroes = [
            {id: 11, name: 'Mr. Nice',  nickname: 'Nicy',   weapon: 'Smilebow', noArms: false, birthday: new Date(1990, 1, 12)},
            {id: 12, name: 'Narco',     nickname: 'Nana',   weapon: '',         noArms: false, birthday: new Date(1985, 5, 5)},
            {id: 13, name: 'Bombasto',  nickname: 'Bomber', weapon: 'Bomb',     noArms: false, birthday: new Date(1982, 3, 25)},
            {id: 14, name: 'Celeritas', nickname: 'Celi',   weapon: 'Cello',    noArms: false, birthday: new Date(1978, 8, 15)},
            {id: 15, name: 'Magneta',   nickname: 'Magi',   weapon: 'Electromagnet', noArms: false, birthday: new Date(1999, 2, 8)},
            {id: 16, name: 'RubberMan', nickname: 'Rubs',   weapon: 'Shoe',     noArms: false, birthday: new Date(1976, 6, 22)},
            {id: 17, name: 'Dynama',    nickname: 'Dyn',    weapon: 'Axe',      noArms: false, birthday: new Date(1941, 3, 14)},
            {id: 18, name: 'Dr IQ',     nickname: 'Ici',    weapon: 'Riddle',   noArms: false, birthday: new Date(1962, 2, 18)},
            {id: 19, name: 'Magma',     nickname: 'Red',    weapon: 'Fire',     noArms: true, birthday: new Date(1982, 8, 2)},
            {id: 20, name: 'Tornado',   nickname: 'Squiddi', weapon: 'Wind',    noArms: true, birthday: new Date(1991, 9, 11)}
        ];
        return {heroes};
    }
}




