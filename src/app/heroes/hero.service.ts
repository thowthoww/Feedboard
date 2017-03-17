import { Injectable, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';

import { APP_CONFIG, IAppConfig } from '../app-config';
import { Hero } from './hero';

@Injectable()
export class HeroService
{
    private heroesUrl: string;
    private headers = new Headers({'Content-Type': 'application/json'});

    public constructor(@Inject(APP_CONFIG) private config: IAppConfig, 
        private http: Http)
    {
        this.heroesUrl = config.apiEndpoint;
    }

    public create(name: string): Promise<Hero>
    {
        const url = `${this.heroesUrl}/hero`;

        return this.http.post(url, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    public delete(id: string): Promise<void>
    {
        const url = `${this.heroesUrl}/hero/${id}`;

        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    public update(hero: Hero): Promise<Hero>
    {
        const url = `${this.heroesUrl}/hero/${hero._id}`;

        return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    public getHeroes(): Promise<any>
    {
        // return Promise.resolve(HEROES);
        const url = `${this.heroesUrl}/heroes`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Hero[])
            .catch(this.handleError)
    }

    public getHero(id: string): Promise<Hero>
    {
        const url = `${this.heroesUrl}/hero/${id}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Hero)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>
    {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
