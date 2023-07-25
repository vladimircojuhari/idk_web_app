import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from 'src/models/driver/driver.model';
import { ServerUrls } from 'src/constants/urls';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DriverService {
    constructor(private httpClient: HttpClient) { 

    }

    add_driver(driver: Driver) {
        return this.httpClient.post(
            ServerUrls.Driver,
            driver
        )
    }

    get_all() {
        return this.httpClient.get<Driver[]>(
            ServerUrls.Driver
        )
    }

    delete(driver_id: string) {
        return this.httpClient.delete(
            `${ServerUrls.Driver}/${driver_id}`
        )
    }
}