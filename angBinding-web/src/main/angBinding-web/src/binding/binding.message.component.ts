import {Component, Input} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'mga-mess',
  template: `<p> Your message is : {{this.message}}`
})
export class BindingMessageComponent {
  @Input() message: any;
}
