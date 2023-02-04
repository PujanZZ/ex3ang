import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import { Car } from '../Car';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent {
  CarForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    brand: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
  });
  public carId: any;
  public saveId: any = [];
  constructor(
    private route: ActivatedRoute,
    private CarServiceI: CarServiceService,
    private router: Router
  ) {}

  deleteFun(): void {
    this.CarServiceI.deleteFun(this.CarForm.get('id').value);
    this.CarForm.setValue({
      id: '',
      name: '',
      model: '',
      brand: '',
      color: '',
    });
  }

  onSave() {
    this.CarServiceI.onSave(this.CarForm.value as Car);
    //console.log(this.CarForm.value);
  }

  onFormUpdate(): void {
    let updateId = this.route.snapshot.paramMap.get('id');
    const upd = this.CarServiceI.onUpdate(this.CarForm, {
      id: this.CarForm.value.id,
      name: this.CarForm.value.name,
      model: this.CarForm.value.model,
      brand: this.CarForm.value.brand,
      color: this.CarForm.value.color,
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.carId = id;

    if (this.carId != '0') {
      const car = this.CarServiceI.onRetrive(this.carId);

      this.CarForm.setValue({
        id: car.id,
        name: car.name,
        model: car.model,
        brand: car.brand,
        color: car.color,
      });
    } else {
      this.CarForm.setValue({
        id: faker.datatype.uuid(),
        name: '',
        model: '',
        brand: '',
        color: '',
      });
    }
  }
}
