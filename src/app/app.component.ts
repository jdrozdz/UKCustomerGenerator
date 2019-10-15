import { Component } from '@angular/core';
import {TemplatesModel} from '../models/TemplatesModel';
import {environment} from '../environments/environment';
import {PostcodesService} from '../services/postcodes.io/postcodes.service';
import {MockarooService} from '../services/mockaroo.com/mockaroo.service';
import {UKCustomer} from '../models/UKCustomer';
import {PostingCode} from '../models/PostingCode';
import {FileSaverService} from 'ngx-filesaver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public recordsCount: any;
  public templates: TemplatesModel[] = environment.templates;
  public selectedTemplate: TemplatesModel;
  public outputDataType: string;
  public outputFileName = 'output_data';
  public customers: UKCustomer[] = [];
  public tableHeaders = Object.keys(new UKCustomer());
  public postcodesFixed = false;

  public constructor(private postcodes: PostcodesService, private tplService: MockarooService, private fileSaver: FileSaverService) {
    this.recordsCount = 100;
  }

  public fixPostCodes() {
    this.customers.forEach(customer => {
      this.postcodes.Autocomplete(customer.PostCode).subscribe((c: PostingCode) => {
        customer.PostCode = c.result[0];
      });
    });
    this.postcodesFixed = true;
  }

  public proceed() {
    this.tplService.GetCustomers(this.recordsCount).subscribe((c: UKCustomer[]) => {
      this.customers = c;
    });
  }

  public saveAs() {
    const rows: string[] = [];
    rows.push(this.tableHeaders.join(','));
    this.customers.forEach(customer => {
      const row = Object.values(customer);
      rows.push(row.join(','));
    });
    const data = new Blob([rows.join('\r')], {type: 'plain/text; charset=utf-8'});
    this.fileSaver.save(data, 'customers.csv');
  }
}
