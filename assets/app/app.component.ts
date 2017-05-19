import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [
      `
        .author {
          display: inline-block;
          font-size: 12px;
          font-style: italic;
          width: 80%;
        }
        .config {
          display: inline-block;
          font-size: 12px;
          text-align: right;
          width: 19%;
        }
      `
    ]
})
export class AppComponent {
  message = {
    content: 'A message',
    author: 'Max'
  } 
}
