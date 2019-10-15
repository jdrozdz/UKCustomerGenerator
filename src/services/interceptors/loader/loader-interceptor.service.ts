import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {LoaderService} from './loader.service';
import {tap} from 'rxjs/operators';

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {
  public constructor(private service: LoaderService) { }
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.ShowLoader();

    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.HideLoader();
      }
    },
      (err: any) => {
      this.HideLoader();
      }));
  }

  private ShowLoader(): void {
    this.service.show();
  }

  private HideLoader(): void {
    this.service.hide();
  }
}
