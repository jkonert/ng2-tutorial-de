/**
 * a sample component using the my-heroes directive
 * @author Johannes Konert
 */
import {Component, OnInit} from "@angular/core";
import {Hero} from "../hero/hero";
import {HeroService} from "../hero/hero.service";
import {EditItem} from "../edit-item";
import {Router} from "@angular/router";

@Component({
    selector: 'my-heroes',
    styleUrls: ['app/app.component.css', 'app/hero/hero-detail.component.css' ],
    templateUrl: 'app/heroes/heroes.component.html'
})

export class HeroesComponent implements OnInit {
    title: string = 'Tour Of Heroes';
    heroes: Array<EditItem<Hero>>;
    details: string = 'Hero-Details';
    showNewHero: boolean = false;
    selectedHero: Hero = null;

    model = new Hero();

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    constructor(private heroService: HeroService,
                private router: Router) {
    }

    /** Called by AngularJS after constructor and after injected services and child-components are set */
    ngOnInit(): void {
        this.heroService
            .getHeroes()
            .then(heroes => {
                this.heroes = heroes.map(item => new EditItem(item));
            });
    }

    onSaved(editItem: EditItem<Hero>, updatedHero: Hero) {
        Object.assign(editItem.item, updatedHero);
        this.heroService.update(editItem.item)
            .then(() => editItem.editing = false);
    }

    onCanceled(editItem: EditItem<Hero>) {
        editItem.editing = false;
    }

    onSubmit() {
        this.model.name = this.model.name.trim();
        this.heroService.create(this.model.name, this.model.weapon, this.model.power)
            .then(hero => {
                this.heroes.push(new EditItem(hero));
                this.selectedHero = null;
                this.showNewHero = false;
            });
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h.item !== hero);
                if (this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            });
    }

    /**  assigns an Hero to the Component's "selectedHero" property by clicking onto one of the Heros, which are listed on
     * the *ngFor-generated hero list
     * @param the Hero that has been clicked last */
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.showNewHero = false;
        this.gotoDetail();
    }

    onAddHero(): void {
        this.selectedHero = null;
        this.showNewHero = true;
    }

    cancelAddHero(): void {
        this.showNewHero = false;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}
