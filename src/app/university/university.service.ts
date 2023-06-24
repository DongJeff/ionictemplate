import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


@Injectable()
export class UpgradeService {

  constructor(private http: HttpClient) { }

  public getListingData(): Observable<any> {
    return this.http.get('./assets/sample-data/travel/listing.json');
  }

  public getDetailsData(slug: string): Observable<any> {
    return this.http.get('./assets/sample-data/travel/details.json')
    .pipe(
      mergeMap((details: any) => details.items.filter((item: any) => item.slug === slug))
    );
  }
}
