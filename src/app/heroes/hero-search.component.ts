import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero, HeroSearchService } from '.';

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: [ './hero-search.component.css' ],
    providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit
{
    private heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    public constructor( private heroSearchService: HeroSearchService, private router: Router)
    {
    }

    public ngOnInit(): void
    {
        this.heroes = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                ? this.heroSearchService.search(term) // return the http search observable
                : Observable.of<Hero[]>([])) // or the observable of empty heroes if there was no search term
            .catch(this.handleError);
    }

    public onGotoDetail(hero: Hero): void
    {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

    // Push a search term into the observable stream.
    private search(term: string): void
    {
        this.searchTerms.next(term);
    }

    private handleError(error: any): Observable<any>
    {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.of<Hero[]>([]);
    }
}
