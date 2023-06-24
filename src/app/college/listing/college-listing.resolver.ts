import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeService } from '../college.service';

@Injectable()
export class CollegeListingResolver implements Resolve<any> {

  constructor(private travelService: CollegeService) {}

  resolve(): Observable<any> {
    return this.travelService.getListingData();
  }
}
