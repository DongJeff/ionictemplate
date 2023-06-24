import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CoopService } from '../coopprogram.service';

@Injectable()
export class CoopListingResolver implements Resolve<any> {

  constructor(private coopService: CoopService) {}

  resolve(): Observable<any> {
    return this.coopService.getListingData();
  }
}
