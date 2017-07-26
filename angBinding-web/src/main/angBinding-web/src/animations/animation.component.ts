import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'mga-anim',
  templateUrl: 'animation.component.html'
})
export class AnimationComponent implements OnInit{
  hideShowLabel: string = "Hide";

  ngOnInit(){
  }

  hideShowClick() {
    if(this.hideShowLabel == "Hide") this.hideShowLabel = "Show";
    else this.hideShowLabel = "Hide";
  }
}
