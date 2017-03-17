import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '.';

@Injectable()
export class HeroSearchService
{
    private heroesUrl = 'api/v1'; // URL to web API
    private headers = new Headers({'Content-Type': 'application/json'});

    public constructor(private http: Http)
    {
    }

    public search(term: string): Observable<Hero[]>
    {
        const url = `${this.heroesUrl}/hero/?name=${term}`;

        return this.http.get(url, {headers: this.headers})
            .map(response => response.json() as Hero[]);
    }
}
