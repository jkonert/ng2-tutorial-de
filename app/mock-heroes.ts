import { Hero }         from './hero';
import {HeroBirthday}   from './hero-birthday1.component';
import {HeroBirthday2}  from './hero-birthday2.component';

export var HEROES: Hero[] = [
    new Hero(1,'Windstorm', 300, 'Olympia', 'Thunderbolt'), // Parameters defined in the Hero class (hero.ts-file)
    new Hero(2,'Magneto', 35, 'Stalingrad', 'Neodym'),
    new Hero(3,'Magma', 3000, 'Earth Core', 'Lava')
];
