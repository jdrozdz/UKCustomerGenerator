// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {TemplatesModel} from '../models/TemplatesModel';

export const TEMPLATES: TemplatesModel[] = [
  { name: 'UK customers', url: new URL('https://api.mockaroo.com/api/d70f9190?count=500&key=39391da0') },
  { name: 'USA Customers', url: new URL('https://api.mockaroo.com/api/396c56a0?count=500&key=39391da0') }
];

export const environment = {
  production: false,
  templates: TEMPLATES
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
