import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from 'src/models/driver/driver.model';
import { IDriverNames } from 'src/models/driver/names.interface';
import { Route } from 'src/models/routes/route.model';
import { DriverService } from 'src/services/driver/driver.service';

@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.scss']
})
export class NewRouteComponent implements OnInit {

  route: Route = new Route();
  drivers: Driver[] = [];
  
  @Output()
  saveRouteEvt: EventEmitter<Route> = new EventEmitter<Route>();

  constructor(
    private driverService: DriverService
  ) { }

  async ngOnInit(): Promise<void> {
    this.driverService.get_all().subscribe((res) => {
      this.drivers = res;
    });
  }

  save() {
    this.saveRouteEvt.emit(this.route);
  }
}
