import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CoopService } from '../coop.service';

@Injectable()
export class CoopDetailsResolver implements Resolve<any> {

  constructor(private dealsService: CoopService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    const itemSlug = route.paramMap.get('productId');
    return this.dealsService.getDetailsData(itemSlug);
  }
}
