import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div id="wrapper">
      <h1>Header</h1>
      <br>
      <div id="content" class="container">
        <router-outlet></router-outlet>
      </div>
      <h1>Footer</h1>
    </div>
  `,
  styles: []
})

export class AppComponent { }
