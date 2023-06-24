import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PolytechService } from '../polytech.service';

@Injectable()
export class PolytechDetailsResolver implements Resolve<any> {

  constructor(private PolytechService: PolytechService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    const itemSlug = route.paramMap.get('productId');
    return this.PolytechService.getDetailsData(itemSlug);
  }
}
