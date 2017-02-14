import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard';
import { HeroesComponent, HeroDetailComponent, HeroService } from './heroes';

@NgModule({
    imports: [ BrowserModule, FormsModule, AppRoutingModule ],
    declarations: [ AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})

export class AppModule
{
}
