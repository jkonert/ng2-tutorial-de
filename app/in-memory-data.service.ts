import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService{
    createDb() {
        let heroes = [
            {id: 11, name: 'Mr. Nice',  nickname: 'Nicy',   weapon: 'Smilebow', noArms: false, birthday: new Date(1990, 3, 15)},
            {id: 12, name: 'Narco',     nickname: 'Nana',   weapon: '',         noArms: false, birthday: new Date(1985, 3, 15)},
            {id: 13, name: 'Bombasto',  nickname: 'Bomber', weapon: 'Bomb',     noArms: false, birthday: new Date(1982, 3, 15)},
            {id: 14, name: 'Celeritas', nickname: 'Celi',   weapon: 'Cello',    noArms: false, birthday: new Date(1978, 3, 15)},
            {id: 15, name: 'Magneta',   nickname: 'Magi',   weapon: 'Electromagnet', noArms: false, birthday: new Date(1999, 3, 15)},
            {id: 16, name: 'RubberMan', nickname: 'Rubs',   weapon: 'Shoe',     noArms: false, birthday: new Date(1976, 3, 15)},
            {id: 17, name: 'Dynama',    nickname: 'Dyn',    weapon: 'Axe',      noArms: false, birthday: new Date(1941, 3, 15)},
            {id: 18, name: 'Dr IQ',     nickname: 'Ici',    weapon: 'Riddle',   noArms: false, birthday: new Date(1962, 3, 15)},
            {id: 19, name: 'Magma',     nickname: 'Red',    weapon: 'Fire',     noArms: true, birthday: new Date(1982, 3, 15)},
            {id: 20, name: 'Tornado',   nickname: 'Squiddi', weapon: 'Wind',    noArms: true, birthday: new Date(1991, 3, 15)}
        ];
        return {heroes};
    }
}




