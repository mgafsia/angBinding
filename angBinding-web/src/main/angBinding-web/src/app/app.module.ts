import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdMenuModule,
  MdTabsModule,
  MdToolbarModule
} from "@angular/material";
import {BindingModule} from "../binding/binding.module";
import {MyObservableModule} from "../rx/myoberserbvable.module";
import {RouterModule} from "@angular/router";
import {BindingComponent} from "../binding/binding.component";
import {MyObservableComponent} from "../rx/myobservable.component";
import {AnimationComponent} from "../animations/animation.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule,
    BindingModule,
    MyObservableModule,
    RouterModule.forRoot([
        { path: 'binding', component: BindingComponent},
        { path: 'rx', component: MyObservableComponent},
        { path: 'animations', component: AnimationComponent},
        { path: '', component: BindingComponent}
     ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
