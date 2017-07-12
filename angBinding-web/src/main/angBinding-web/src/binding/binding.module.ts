import {NgModule} from "@angular/core";
import {BindingComponent} from "./binding.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BindingSizeComponent} from "./binding.size.component";
import {BindingCounterComponent} from "./binding.counter.component";
import {BindingMessageComponent} from "./binding.message.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdButtonModule, MdCardModule, MdIconModule, MdInputModule} from "@angular/material";

@NgModule({
  exports: [BindingComponent],
  declarations: [BindingComponent,
                 BindingSizeComponent,
                 BindingCounterComponent,
                 BindingMessageComponent
                 ],
  imports: [BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            //--Material Modules
            MdInputModule,
            MdIconModule,
            MdButtonModule,
            MdCardModule,

            ]

})
export class BindingModule {
}
