import { Component, OnInit } from '@angular/core';
import { Route } from 'src/models/routes/route.model';
import { RouteService } from 'src/services/routes/routes.service';

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.scss']
})
export class RoutesListComponent implements OnInit {

  routes: Route[] = [];
  constructor(
    private routesService: RouteService
  ) { }

  async ngOnInit() {
    try {
      this.routes = (await this.routesService.get_routes())!;
    }
    catch(ex) {
      alert('something wrong')
    }
  }

}
