import {Subject} from 'rxjs';
import {LoaderComponent} from './loader.component';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private subject = new Subject<LoaderComponent>();
  public loader = this.subject.asObservable();

  public constructor() {}

  public show() {
    this.subject.next({ show: true } as LoaderComponent);
  }

  public hide() {
    this.subject.next({ show: false } as LoaderComponent);
  }
}
