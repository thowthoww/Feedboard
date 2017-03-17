import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app-config');

export interface IAppConfig
{
	apiEndpoint: string;
	title: string;
}

export const HEROES_CONFIG: IAppConfig =
{
	apiEndpoint: '/api/v1',
	title: 'Sprintbox'
};
