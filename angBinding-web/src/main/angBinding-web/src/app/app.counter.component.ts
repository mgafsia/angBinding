import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'mga-counter',
  templateUrl: 'app.counter.component.html'
})
export class AppCounterComponent {
  counterValue: number = 0;
  @Output() counterChange = new EventEmitter();

  increment() {
    this.counterValue++;
    this.counterChange.emit({ value: this.counterValue });
  }

  decrement() {
    this.counterValue--;
    this.counterChange.emit({ value: this.counterValue });
  }
}




