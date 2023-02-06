import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import { map, Observable } from 'rxjs';
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
    name: new FormControl(
      '',
      [Validators.required, Validators.maxLength(100)],
      [this.createValidator()]
    ),
    model: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    brand: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    color: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    yearOfRelease: new FormControl('', [Validators.required, yearMin]),
  });
  public id = '';
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
      yearOfRelease: '',
    });
  }

  onSave() {
    this.CarServiceI.onSave(this.CarForm.value as Car);
    //console.log(this.CarForm.value);
  }

  onFormUpdate(): void {
    let updateId = this.route.snapshot.paramMap.get('id');
    this.CarServiceI.onUpdate(updateId, this.CarForm.value as Car);
    console.log(this.CarServiceI.USERS.map((x) => x.name));
    console.log(this.CarForm);

    let nameInput = this.CarForm.get('name').value;
    this.CarServiceI.checkIfUsernameExists(nameInput, updateId);
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
        yearOfRelease: car.yearOfRelease,
      });
    } else {
      this.CarForm.setValue({
        id: faker.datatype.uuid(),
        name: '',
        model: '',
        brand: '',
        color: '',
        yearOfRelease: '',
      });
    }
  }

  createValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return this.CarServiceI.checkIfUsernameExists(
        control.value,
        this.id
      ).pipe(
        map((result: boolean) =>
          result ? { usernameAlreadyExists: true } : null
        )
      );
    };
  }
}

function yearMin(control: AbstractControl): { [key: string]: any } | null {
  const year = control.value;

  if (year === '' || year > 2000) {
    return null;
  } else {
    return { yearMin: true };
  }
}
