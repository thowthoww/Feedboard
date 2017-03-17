import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService
{
    private heroesUrl = 'api/v1'; // URL to web API
    private headers = new Headers({'Content-Type': 'application/json'});

    public constructor(private http: Http)
    {
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
