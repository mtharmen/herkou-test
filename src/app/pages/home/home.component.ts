import { Component, OnInit } from '@angular/core'

import { Subscription } from 'rxjs/Subscription'

import { ApiService } from './../../core/api.service'

// import Chart from 'chart.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  loading: boolean
  polls: any
  error: string
  getSub: Subscription
  postSub: Subscription

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

  getTest(): void {
    console.log('api-get-call')
    this.getSub = this.api.getTest$()
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.error(err)
        }
      )
  }

  postTest(): void {
    console.log('api-post-call')
    this.postSub = this.api.postTest$()
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.error(err)
        }
      )
  }

}
