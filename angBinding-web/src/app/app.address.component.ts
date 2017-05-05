import {Component, Input} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'mga-add',
  template: `<p> Your message is : {{this.message}}`
})
export class AppMessageComponent {
  @Input() message: any;
}
