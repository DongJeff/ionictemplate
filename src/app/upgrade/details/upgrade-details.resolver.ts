import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UpgradeService } from '../upgrade.service';

@Injectable()
export class UpgradeDetailsResolver implements Resolve<any> {

  constructor(private dealsService: UpgradeService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    const itemSlug = route.paramMap.get('productId');
    return this.dealsService.getDetailsData(itemSlug);
  }
}
