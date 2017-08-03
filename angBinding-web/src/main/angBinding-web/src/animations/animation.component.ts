import {Component, OnInit} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'mga-anim',
  templateUrl: 'animation.component.html',
  animations: [ trigger('theTextDiv', [
                        state('open', style({ 'height': '*'})),
                        state('closed', style({ 'height' : '0px', 'font-size' : '0px'})),
                        transition('closed <=> open', [
                                  animate('2000ms  cubic-bezier(1, 0, 0, 1)')
                              ])
                        ])
              ]

})
export class AnimationComponent implements OnInit{
  showDiv: boolean = false;
  theTextDivStr: string;

  ngOnInit(){
  }

  hideShowClick() {
    this.showDiv = !this.showDiv;
    console.log(this.showDiv);

    if(this.showDiv) this.theTextDivStr = 'closed';
    else this.theTextDivStr = 'open';
  }
}
