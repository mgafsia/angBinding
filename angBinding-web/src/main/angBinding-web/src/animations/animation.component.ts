import {Component, OnInit} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'mga-anim',
  templateUrl: 'animation.component.html',
  animations: [ trigger('theTextDiv', [
                        state('open', style({ 'height' : '100px', 'font-size' : '100px'})),
                        state('closed', style({ 'height' : '0px', 'font-size' : '0px'})),
                        transition('closed => open', [animate(10)]),
                        transition('open => closed', [animate(10)])
                        ])
              ]

})
export class AnimationComponent implements OnInit{
  showDiv: boolean = false;
  theTextDiv: string;

  ngOnInit(){
  }

  hideShowClick() {
    this.showDiv = !this.showDiv;
    console.log(this.showDiv);

    if(this.showDiv) this.theTextDiv = 'open';
    if(this.showDiv) this.theTextDiv = 'closed';
  }
}
