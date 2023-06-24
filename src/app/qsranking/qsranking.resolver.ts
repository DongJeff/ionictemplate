import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { QsService } from './qsranking.service';

@Injectable()
export class QsListingResolver implements Resolve<any> {

  constructor(private QsService: QsService) {}

  resolve(): Observable<any> {
    return this.QsService.getListingData();
  }
}
