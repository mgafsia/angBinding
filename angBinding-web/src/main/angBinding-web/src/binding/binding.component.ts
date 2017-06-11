import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  templateUrl: 'binding.component.html',
  selector: 'cc-bind'
})
export class BindingComponent {
  name: string = "mohamed";
  age:number = 36;
  address:any = {
    street : 'Rue des rues',
    city : '78180 Montigny Le Bretonneux'
  };
  alignment: string = 'right';
  counter: number = 0;
  parentSize: number = 16;
  person: string ="First name - in Parent component";


  switchAlignment() {
    if(this.alignment === 'right') this.alignment = 'left';
    else this.alignment = "right";
  }

  changeCounter(event) {
    this.counter = event.value;
  }

  changePerson() {
    this.person = "Changed by Parent component"
  }
}
