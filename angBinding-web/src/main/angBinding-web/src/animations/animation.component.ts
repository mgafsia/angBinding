import {Component, OnInit} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'mga-anim',
  templateUrl: 'animation.component.html',
  animations: [ trigger('theTextDiv', [
                        state('open', style({ 'height': '*'})),
                        state('closed', style({ 'height' : '0px', 'font-size' : '0px'})),
                        transition('closed <=> open', [
                                  animate('500ms ease-out')
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
