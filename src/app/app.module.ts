import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ListView1Component } from './list-view1/list-view1.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AppRoutingModule,
  routingComponents,
} from './routingmodule/routingmodule.module';
import { CarServiceService } from './car-service.service';
import { MatTableModule } from '@angular/material/table';
import { ScrollComponent } from './scroll/scroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    TableVirtualScrollModule,
    ScrollingModule,
    VirtualScrollerModule,
  ],
  declarations: [
    routingComponents,
    AppComponent,
    ScrollComponent,
    ListView1Component,
  ],
  providers: [CarServiceService],

  bootstrap: [AppComponent],
})
export class AppModule {}
