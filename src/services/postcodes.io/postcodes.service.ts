import { Injectable } from '@angular/core';
import {IPostcodes} from './IPostcodes';
import {Observable} from 'rxjs';
import {PostingCode} from '../../models/PostingCode';
import {HttpClient} from '@angular/common/http';
import {Validators} from '../Validators';
import {ResultModel} from '../../models/ResultModel';

enum APIS {
  POSTCODES,
  ZIP_CODE_API
}

@Injectable({
  providedIn: 'root'
})
export class PostcodesService extends Validators implements IPostcodes {

  constructor(private http: HttpClient) {
    super();
    this.apiData = [
      {
        description: 'postcodes.io',
        getURL: new URL('https://api.postcodes.io/postcodes/:postcode/autocomplete'),
        validateURL: new URL('https://api.postcodes.io/postcodes/:postcode/validate')
      },
      {
        description: 'ZipCodeAPI.com',
        apiKey: 'YVQoGQpzpA9ZMJfrsna8d2oCOpBnEXuXOWvomTRGzHbQc0mEc1yu4Oaln4y3YRz7',
        validateURL: new URL('https://www.zipcodeapi.com/rest/:apiKey/'),
        getURL: new URL('https://www.zipcodeapi.com/rest/:apiKey/')
      }
    ];
  }

  Autocomplete(code: string): Observable<PostingCode> {
    const url = this.apiData[APIS.POSTCODES].getURL.href.replace(':postcode', code);
    return this.http.get<PostingCode>(url);
  }

  Query(code: string): Observable<PostingCode> {
    return undefined;
  }

  Validate(code: string): Observable<ResultModel> {
    const url = this.apiData[APIS.POSTCODES].validateURL.href.replace(':postcode', code);
    return this.http.get<ResultModel>(url);
  }
}
