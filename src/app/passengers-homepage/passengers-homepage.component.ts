import { Component, OnInit } from '@angular/core';
import { PassengersService } from '../passengers/passengers.service';

@Component({
  selector: 'app-passengers-homepage',
  templateUrl: './passengers-homepage.component.html',
  styleUrls: ['./passengers-homepage.component.css']
})
export class PassengersHomepageComponent implements OnInit {

  passengers: any[] = [];
  displayedPassengers: any[] = []; 
  displaySize = 5; 
  selectedPassenger: any;

  constructor(private passengersService: PassengersService) { }

  ngOnInit(): void {
    this.passengersService.getPassengers().subscribe(data => {
      this.passengers = data;
      this.displayedPassengers = this.passengers.slice(0, this.displaySize); 
    });
  }

  showMorePassengers(): void {
    const startIndex = this.displayedPassengers.length;
    const endIndex = startIndex + this.displaySize;
    if (endIndex <= this.passengers.length) {
      this.displayedPassengers = this.displayedPassengers.concat(this.passengers.slice(startIndex, endIndex));
    }
  }

  showDetails(passenger: any): void {
    this.selectedPassenger = passenger;
  }
}
