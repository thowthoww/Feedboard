import { Injectable, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { APP_CONFIG, IAppConfig } from '../app-config';
import { Hero } from '.';

@Injectable()
export class HeroSearchService
{
    private heroesUrl: string;
    private headers: Headers;

    public constructor(@Inject(APP_CONFIG) private config: IAppConfig, 
        private http: Http)
    {
        this.heroesUrl = config.apiEndpoint;
        this.headers = config.servicesHeaders;
    }

    public search(term: string): Observable<Hero[]>
    {
        const url = `${this.heroesUrl}/heroes/?name=${term}`;

        return this.http.get(url, {headers: this.headers})
            .map(response => response.json() as Hero[]);
    }
}
