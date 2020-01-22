import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
stateDetails;
selectedValue;
cityDetails;
constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.fetchAllStates();
  }
  fetchAllStates() {
    this.locationService.fetchStates().subscribe(data => {
      console.log(data, 'states details');
      this.stateDetails = data;
    }, err => {
      console.log(err);
    })
  }
  onChange(value) {
    console.log(value,'selected value');
    this.getCityDetails(value)
  }
  getCityDetails(id) {
    this.locationService.fetchCityDetails(id).subscribe(data => {
      this.cityDetails = data;
      console.log(data);
    }, err => {
      console.log(err);
 
    })
  }
}
