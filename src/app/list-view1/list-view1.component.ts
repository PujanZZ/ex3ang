import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../Car';
import { CarServiceService } from '../car-service.service';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';

@Component({
  selector: 'app-list-view1',
  templateUrl: './list-view1.component.html',
  styleUrls: ['./list-view1.component.css'],
})
export class ListView1Component implements OnInit {
  displayedColumns: string[] = [
    'name',
    'model',
    'brand',
    'color',
    'yearOfRelease',
  ];

  dataSource = new TableVirtualScrollDataSource(this._ps.USERS);
  car: Car[] = [];
  constructor(private _ps: CarServiceService, private router: Router) {}

  ngOnInit() {
    this.car = this._ps.USERS;
    //console.log(this.car);
  }

  onRetrive(car: any) {
    console.log(car.id);
    this.router.navigate(['/listview1', car.id]);
  }
  onCreate() {
    this.router.navigate(['/listview1', '0']);
  }

  onSaveReal() {}
}
