import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'mga-counter',
  templateUrl: 'app.counter.component.html'
})
export class AppCounterComponent {
  counterValue: number = 0;

  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }
}




