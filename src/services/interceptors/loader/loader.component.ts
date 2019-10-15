import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoaderService} from './loader.service';

@Component({
  selector: 'app-loader',
  template: `<div [class.hidden]="!show">
      <div class="loader-overlay">
          <div *ngIf="show" class="loader"></div>
      </div>
  </div>`,
  styleUrls: [ './loader.component.css' ]
})
export class LoaderComponent implements OnInit, OnDestroy {
  public show = false;
  private subscription: Subscription;

  public constructor(private service: LoaderService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.service.loader.subscribe( (state: LoaderComponent) => {
      this.show = state.show;
    });
  }
}
