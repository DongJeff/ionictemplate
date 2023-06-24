import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UniService } from '../uni.service';

@Injectable()
export class UniDetailsResolver implements Resolve<any> {

  constructor(private dealsService: UniService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    const itemSlug = route.paramMap.get('productId');
    return this.dealsService.getDetailsData(itemSlug);
  }
}
