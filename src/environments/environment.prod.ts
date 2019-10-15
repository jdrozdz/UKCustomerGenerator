import {TemplatesModel} from '../models/TemplatesModel';

export const TEMPLATES: TemplatesModel[] = [
  { name: 'UK customers', url: new URL('https://api.mockaroo.com/api/d70f9190?count=500&key=39391da0') },
  { name: 'USA Customers', url: new URL('https://api.mockaroo.com/api/396c56a0?count=500&key=39391da0') }
];

export const environment = {
  production: true,
  templates: TEMPLATES
};
