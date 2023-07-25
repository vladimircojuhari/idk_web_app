import { Component, OnInit } from '@angular/core';
import { Route } from 'src/models/routes/route.model';
import { RouteService } from 'src/services/routes/routes.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  constructor(
    private routeService: RouteService
    
    ) { }

  ngOnInit(): void {
  }

  saveRoute(route: Route) {
    this.routeService.add_route(route).subscribe((res) => {
      console.log(res)
    })
  }
}
