import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UniService } from '../uni.service';

@Injectable()
export class UniListingResolver implements Resolve<any> {

  constructor(private uniService: UniService) {}

  resolve(): Observable<any> {
    return this.uniService.getListingData();
  }
}
