import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Route } from "src/models/routes/route.model";


@Injectable()
export class RouteService {
    constructor(
        private httpClient: HttpClient
    ) {

    }


    add_route(route: Route) {
        return this.httpClient.post('/routes', route);
    }

    get_routes() {
        return this.httpClient.get<Route[]>('/routes').toPromise();
    }
}