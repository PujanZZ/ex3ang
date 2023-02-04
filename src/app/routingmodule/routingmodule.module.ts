import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailViewComponent } from '../detail-view/detail-view.component';
import { HelloComponent } from '../hello.component';
import { ListView1Component } from '../list-view1/list-view1.component';
import { ScrollComponent } from '../scroll/scroll.component';

const routes: Routes = [
  { path: 'test', component: ScrollComponent },
  { path: 'listview1', component: ListView1Component },
  { path: 'listview1/:id', component: DetailViewComponent },
  { path: 'listview1/0', component: DetailViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  ScrollComponent,
  ListView1Component,
  DetailViewComponent,
];
