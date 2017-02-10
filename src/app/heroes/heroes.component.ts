import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero, HeroService } from '.';

@Component(
{
    selector: 'heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit
{
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService)
    {
    }

    ngOnInit(): void
    {
        this.initHeroes();
    }

    initHeroes(): void
    {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void
    {
        this.selectedHero = hero;
    }
}
