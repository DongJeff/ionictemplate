import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UpgradeService } from '../upgrade.service';

@Injectable()
export class UpgradeListingResolver implements Resolve<any> {

  constructor(private upgradeService: UpgradeService) {}

  resolve(): Observable<any> {
    return this.upgradeService.getListingData();
  }
}
