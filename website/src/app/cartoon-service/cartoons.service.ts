import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cartoons } from './cartoons';
import { CARTOONS } from './cartoons-data';

@Injectable({
  providedIn: 'root'
})
export class CartoonsService {

  constructor() { }

//   getCartoons(): Observable<Cartoons[]> {
//   return of(CARTOONS);
// }

  getCartoons(id: number): Observable<Cartoons> {
    return of(CARTOONS.find(cartoons => cartoons.id === id));
}
}
