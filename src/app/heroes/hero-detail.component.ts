import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common'
import 'rxjs/add/operator/switchMap';

import { Hero, HeroService } from '.';

@Component(
{
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./heroes-detail.component.css']
})

export class HeroDetailComponent implements OnInit
{
    @Input()
    hero: Hero;

    public constructor( 
        private heroService: HeroService, 
        private route: ActivatedRoute, 
        private location: Location )
    {
    }

    public ngOnInit(): void
    {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    public onBack(): void
    {
        this.location.back();
    }

    public onSave(): void
    {
        this.heroService.update(this.hero)
            .then(() => this.onBack());
    }
}
