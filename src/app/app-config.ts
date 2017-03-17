import { OpaqueToken } from '@angular/core';
import { Headers } from '@angular/http'

export let APP_CONFIG = new OpaqueToken('app-config');

export interface IAppConfig
{
	apiEndpoint: string;
	title: string;
	servicesHeaders: Headers;
}

export const HEROES_CONFIG: IAppConfig =
{
	apiEndpoint: '/api/v1',
	title: 'Sprintbox',
	servicesHeaders: new Headers({'Content-Type': 'application/json'})
};
