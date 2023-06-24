import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PolytechService } from '../polytech.service';

@Injectable()
export class PolytechListingResolver implements Resolve<any> {

  constructor(private PolytechService: PolytechService) {}

  resolve(): Observable<any> {
    return this.PolytechService.getListingData();
  }
}
