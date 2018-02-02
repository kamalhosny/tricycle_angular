import { Http, Headers } from '@angular/http';
import { NotFoundError } from './../common/not-found-error';
import { UnknownError } from './../common/unknown-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WebService {

  private url = 'http://18.218.192.204:3000/api/v1';

  constructor(private http: Http) {
  }

  //EXAMPLE GET RESTful CALL. CALL DOES NOT ACTUALLY WORK. REFER TO DOCUMENTATION PROVIDED FOR FULL LIST OF API CALLS
  getSweets() {
    return this.http.get(`${this.url}/a/sweets`, { headers: this.getHeaders(true) })
      .catch(this.handleError);
  }

  //EXAMPLE POST RESTful CALL. CALL DOES NOT ACTUALLY WORK. REFER TO DOCUMENTATION PROVIDED FOR FULL LIST OF API CALLS
  putSweets(account) {
    return this.http.post(`${this.url}/a/sweets`, JSON.stringify(account), { headers: this.getHeaders() })
      .catch(this.handleError);
  }

  //ADD MORE GET,POST,DELETE,PATCH CALLS HERE

  private handleError(error: any) {
    if (error.status === 0) {
      return Observable.throw(new UnknownError().errorMessage);
    }

    if (error.status === 404) {
      return Observable.throw(new NotFoundError().errorMessage);
    }

    return Observable.throw(new AppError(error._body).errorMessage);
  }

  private getHeaders(auth?: boolean) {

    var headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');

    if (auth) {
      headers.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTMsImVtYWlsIjoiZGV2QHRyaWN5Y2xlbHRkLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1MTY4NzI1NzgsImV4cCI6Mjc0MzY4NzI1Nzh9.2F2qMfhf8fMqn4vNXCMicT0DcSHsAOO7lt3q2dqoO7U`);
    }

    return headers;
  }
}
