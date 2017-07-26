import {NgModule} from "@angular/core";
import {AnimationComponent} from "./animation.component";
import {MdButtonModule, MdInputModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [AnimationComponent],
  exports: [AnimationComponent],
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    MdInputModule,
    MdButtonModule
  ]
})
export class AnimationModule {
}
