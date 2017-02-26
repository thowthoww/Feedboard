import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard';
import { HeroesComponent, HeroDetailComponent, HeroService, HeroSearchComponent } from './heroes';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, 
        InMemoryWebApiModule.forRoot(InMemoryDataService), 
        AppRoutingModule ],
    declarations: [ AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent, HeroSearchComponent ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})

export class AppModule
{
}
