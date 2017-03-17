import { Component, Inject } from '@angular/core';

import { APP_CONFIG, IAppConfig } from './app-config';

@Component(
{
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent
{
    private title: string;

    constructor(@Inject(APP_CONFIG) config: IAppConfig)
    {
        this.title = config.title;
    }
}
