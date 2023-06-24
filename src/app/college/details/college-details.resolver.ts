import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeService } from '../college.service';

@Injectable()
export class CollegeDetailsResolver implements Resolve<any> {

  constructor(private CollegeService: CollegeService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    const itemSlug = route.paramMap.get('productId');
    return this.CollegeService.getDetailsData(itemSlug);
  }
}
