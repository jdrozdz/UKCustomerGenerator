import { PostingCode } from 'src/models/PostingCode';
import {Observable} from 'rxjs';

export interface IPostcodes {
  Autocomplete(code: string): Observable<PostingCode>;
  Query(code: string): Observable<PostingCode>;
  Validate<T>(code: string);
}
