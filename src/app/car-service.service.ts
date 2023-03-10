import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { of, delay } from 'rxjs';
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
        yearOfRelease: faker.datatype.number({ min: 2000, max: 2050 }),
      };
    }

    Array.from({ length: 10000 }).forEach(() => {
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

  onUpdate(id: string, x: Car): void {
    const res = this.USERS.findIndex((val) => val.id === id);
    this.USERS.splice(res, 1, x);
  }

  onSave(x: Car): void {
    this.USERS.push(x);
    //console.log(this.USERS);
  }

  // checkIfUsernameExists(value: string, id: string) {
  //   return of(this.USERS.some((a) => a.id === value)).pipe(delay(1000));
  // }
  checkIfUsernameExists(value: string, id: string) {
    return of(
      this.USERS.some((a) => {
        if (id != a.id) {
          return a.name === value;
        } else {
          return false;
        }
      })
    );
  }
}
