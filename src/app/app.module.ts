import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { APP_CONFIG, HEROES_CONFIG } from './app-config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NewUserComponent, NewUserDialog } from './new_user';
import { DashboardComponent } from './dashboard';
import { HeroesComponent, HeroDetailComponent, HeroService, HeroSearchComponent } from './heroes';

@NgModule({
	imports: [ BrowserModule, FormsModule, HttpModule, MaterialModule, AppRoutingModule ], 
	declarations: [ AppComponent, 
		NewUserComponent, NewUserDialog, 
		DashboardComponent, HeroesComponent, HeroDetailComponent, HeroSearchComponent ], 
	providers: [ HeroService, 
		{ provide: APP_CONFIG, useValue: HEROES_CONFIG } ], 
	bootstrap: [ AppComponent, 
		NewUserComponent, NewUserDialog ]
})

export class AppModule
{
}
