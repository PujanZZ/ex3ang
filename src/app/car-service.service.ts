import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Car } from './Car';

@Injectable()
export class CarServiceService {
  public USERS: Car[] = [];

  constructor() {
    function getCar(): Car {
      return {
        id: faker.datatype.uuid(),
        name: faker.vehicle.vehicle(),
        model: faker.vehicle.model(),
        brand: faker.vehicle.manufacturer(),
        color: faker.vehicle.color(),
      };
    }

    Array.from({ length: 5 }).forEach(() => {
      this.USERS.push(getCar());
    });
  }
  onRetrive(id: string): Car {
    const res = this.USERS.find((val) => val.id === id);
    return res;
  }
  deleteFun(id: string): void {
    const res = this.USERS.findIndex((val) => val.id === id);
    this.USERS.splice(res, 1);
  }

  onUpdate(formGroup, values: Car) {
    formGroup.patchValue({
      id: values.id,
      name: values.name,
      model: values.model,
      brand: values.brand,
      color: values.color,
    });
  }

  onSave(x: Car) {
    this.USERS.push(x);
    //console.log(this.USERS);
  }
}
