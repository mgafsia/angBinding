import {NgModule} from "@angular/core";
import {BindingComponent} from "./binding.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BindingSizeComponent} from "./binding.size.component";
import {BindingCounterComponent} from "./binding.counter.component";
import {BindingMessageComponent} from "./binding.message.component";

@NgModule({
  exports: [BindingComponent],
  declarations: [BindingComponent,
                 BindingSizeComponent,
                 BindingCounterComponent,
                 BindingMessageComponent],
  imports: [BrowserModule,
            FormsModule]

})
export class BindingModule {
}
