import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Serials } from './serials';
import { SERIALS } from './serials-data';

@Injectable({
  providedIn: 'root'
})
export class SerialsService {

  constructor() { }

//   getSerials(): Observable<Serials[]> {
//   return of(SERIALS);
// }

  getSerials(id: number): Observable<Serials> {
    return of(SERIALS.find(serials => serials.id === id));
}
}
