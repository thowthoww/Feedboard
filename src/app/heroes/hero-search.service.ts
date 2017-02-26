import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Hero } from '.';

@Injectable()
export class HeroSearchService
{
    public constructor(private http: Http)
    {
    }

    public search(term: string): Observable<Hero[]>
    {
        return this.http.get(`app/heroes/?name=${term}`)
            .map(response => response.json().data as Hero[]);
    }
}
