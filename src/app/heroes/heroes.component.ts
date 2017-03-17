import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Hero, HeroService } from '.';

@Component(
{
    moduleId: module.id,
    selector: 'heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit
{
    heroes: Hero[];
    selectedHero: Hero;

    public constructor(private heroService: HeroService, private router: Router)
    {
    }

    public ngOnInit(): void
    {
        this.initHeroes();
    }

    public onAdd(name: string): void
    {
        name = name.trim();
        if(!name) return;

        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    public onDelete(hero: Hero): void
    {
        this.heroService.delete(hero._id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if(this.selectedHero===hero)
                {
                    this.selectedHero = null;
                }
            });
    }

    public onSelect(hero: Hero): void
    {
        this.selectedHero = hero;
    }

    public gotoDetail(): void
    {
        this.router.navigate(['/hero', this.selectedHero._id]);
    }

    private initHeroes(): void
    {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}
