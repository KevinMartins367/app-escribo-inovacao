import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-escribo-inovacao';
  result = 0;

  SomeValues(value: any){
    if (Number(value) > 0) {

      let soma3 : number = 0;
      let soma5 : number = 0;

      for (let index = 1; index < (value/3); index++) {
        soma3 += 3 * index;

      }
      for (let index = 1; index < (value/5); index++) {
        soma5 +=  5 * index;

      }
      console.log(soma3);
      console.log(soma5);

      console.log(soma3 + soma5);
      this.result = (soma3 + soma5);
    }
  }
}
