import {Component, OnInit} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'mga-anim',
  templateUrl: 'animation.component.html',
  animations: [ trigger('theTextDiv', [
                        state('open', style({ 'height' : '*'})),
                        state('closed', style({ 'height' : '0px', 'font-size' : '0px'})),
                        transition('closed <=> open', [animate(1000)])
                        ])
              ]

})
export class AnimationComponent implements OnInit{
  hideShow: boolean = true;
  theTextDiv: string;

  ngOnInit(){
  }

  hideShowClick() {
    this.hideShow = !this.hideShow;
    console.log(this.hideShow);

    if(this.hideShow) this.theTextDiv = 'open';
    if(this.hideShow) this.theTextDiv = 'closed';
  }
}
