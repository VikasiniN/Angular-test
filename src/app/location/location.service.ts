import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  fetchStates(): Observable<any> {
    const url = 'http://api.minebrat.com/api/v1/states';
    return this.http.get<any>(url);
  }
  fetchCityDetails(id): Observable<any> {
    console.log(id, 'selected id');
    const url = 'http://api.minebrat.com/api/v1/states/cities/'+ id;
    return this.http.get<any>(url);
  }
}
