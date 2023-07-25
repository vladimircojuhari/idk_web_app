import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/models/driver/driver.model';
import { DriverService } from 'src/services/driver/driver.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  drivers_list: Driver[] = [];

  constructor(
    private driverService: DriverService
  ) { }

  ngOnInit(): void {
    this.driverService.get_all().subscribe((response:any) => {
      this.drivers_list = response;
    })
  }

  onSaveNewDriver(driver: Driver) {
    console.log(driver);
    this.driverService.add_driver(driver).subscribe((res) => {
      console.log(res)
    });
  }

  addDriver() {

  }

  onDeleteDriver(driver: Driver) {
    this.driverService.delete(driver._id).subscribe((res) => {
    })
  }
}
