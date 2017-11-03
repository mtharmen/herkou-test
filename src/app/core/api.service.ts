import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Subscription } from 'rxjs/Subscription'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/catch'

import { base_url } from './config'

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private handleError(err: Response | any): Observable<any> {
    const errorMsg = err.error ? err.error.message : 'Unabled to complete request'
    return Observable.throw(errorMsg)
  }

  setError(error): void {
    console.error(error)
    window.location.href = base_url + '/error'
  }

  getTest$(): Observable<any> {
    return this.http
      .get(base_url + '/api/get-test')
      .catch(this.handleError)
  }

  postTest$(): Observable<any> {
    return this.http
      .post(base_url + '/api/post-test/', { test: 'test' })
      .catch(this.handleError)
  }
}
