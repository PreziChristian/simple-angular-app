import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptorInterceptor implements HttpInterceptor {
  token = localStorage.getItem('token') || '';

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.headers.get('skip')) {
      return next.handle(request);
    } else {
      return next.handle(
        request.clone({ setHeaders: { authorization: this.token } })
      );
    }
  }
}
