/**
 * Created by Samy on 12.12.2016.
 */
import { Pipe, PipeTransform } from '@angular/core';

/*
 * Shows the age of an Hero
 * Takes a birthday date and calculates the age. Optionally can be
 * also a minAge parameter was used which compares the age with the minAge.
 * If the age is too young/low it will also pass a "hero too young!" string with the age of the hero.
 * Usage:
 *   date | showAge[:minAge]
 * Example:
 *   {{ birthdayDate |  showAge:18}}
 *
 */
@Pipe({name: 'showAge'})
export class HeroAgePipe implements PipeTransform {

    transform(bday: string, minAge: number): any {

        let today = new Date();
        let bdayDate = Date.parse(bday);

        let age = Math.floor((today.getTime() - bdayDate) / 1000 / 60 / 60 / 24 / 365);

        if(!!minAge)
        {
            if(minAge < age)
                return age;
            else
                return age+" hero too young!"
        }
        return age;
    }
}