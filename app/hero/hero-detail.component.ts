import {Component, Input, EventEmitter, Output, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {ActivatedRoute, Params} from "@angular/router";
import {HeroService} from "./hero.service";
import {Location} from "@angular/common";
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero/hero-detail.component.html',
    styleUrls: [ 'app/hero/hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    @Input('details') irgendEinName: string;
    @Output() addVillain: EventEmitter<string> = new EventEmitter<string>();
    villain: string;
    fightingHero: Hero;
    hideFight: boolean = true;

    powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

    heroForm: FormGroup;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    /**
     *  Triggered on input changes for villain. Emits addVillain event
     * @param value {String} of input
     */
    onKeyup(value: string) {
        this.addVillain.emit(value);
    }

    /** called by template on button click. Will switch between Sword and Axe for the hero with the id "1" */
    weaponChange(): void {
        switch (this.hero.weapon) {
            case 'Sword':
                this.hero.weapon = 'Axe';
                break;
            case 'Axe':
                this.hero.weapon = 'Sword';
                break;
            default:
                this.hero.weapon = 'Sword';
        }
    }

    get weapon(): string {
        return this.hero.weapon;
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
        this.heroForm = new FormGroup({
            name: new FormControl('', [
                Validators.required,
                Validators.minLength(2)
            ])
        });
    }

    goBack(): void {
        this.location.back();
    }

    onSaved(updatedHero: Hero) {
        this.heroService.update(updatedHero);
    }

    onFight(hero: Hero): void {
        this.fightingHero = hero;
        this.hideFight = false;
    }
}

