import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  name: string = "mohamed";
  age:number = 36;
  address:any = {
      street : 'Rue des rues',
      city : '78180 Montigny Le Bretonneux'
  };
  alignment: string = 'right';
  counter: number = 0;

  switchAlignment() {
    if(this.alignment === 'right') this.alignment = 'left';
    else this.alignment = "right";
  }
  
  changeCounter(event) {
    this.counter = event.value;
  }
}
