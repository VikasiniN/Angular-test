import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {
@Input() cities;
selectedCity;
  constructor(private locationService: LocationService) { }

  ngOnInit() {
    console.log('cities', this.cities)
  }
  showResult(city) {
    this.selectedCity = city;
console.log(city, 'selectedCityName')
  }
}
