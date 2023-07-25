
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http'
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";

export enum ConnectionStatusEnum {
    Online,
    Offline
}


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private httpClient: HttpClient) {

    }


    intercept(request: HttpRequest<any>, next: HttpHandler): any {
        request = request.clone({ url: environment.server_url + request.url })
        return next.handle(request);
    }
}
