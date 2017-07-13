import {NgModule} from "@angular/core";
import {MyObservableComponent} from "./myobservable.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MdButtonModule, MdInputModule} from "@angular/material";

@NgModule({
  declarations: [MyObservableComponent],
  exports: [MyObservableComponent],
  imports: [BrowserModule,
            FormsModule,
            HttpModule,
            MdInputModule,
            MdButtonModule
           ]
  })
export class MyObservableModule {
}
