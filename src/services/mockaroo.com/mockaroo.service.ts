import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UKCustomer} from '../../models/UKCustomer';

@Injectable({
  providedIn: 'root'
})
export class MockarooService {

  // tslint:disable-next-line:variable-name
  private uk_customers_tpl = 'https://api.mockaroo.com/api/d70f9190?count=:count&key=39391da0';

  constructor(private http: HttpClient) { }

  public GetCustomers(count: number): Observable<UKCustomer[]> {
    const url = this.uk_customers_tpl.replace(':count', count.toString());
    return this.http.get<UKCustomer[]>(url);
  }
}
