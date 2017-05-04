import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  name: string = "mohamed";
  age:number = 36;
  address:any = {
      street : 'Rue des rues',
      city : '78180 Montigny Le Bretonneux'
  };
  alignement: string = 'right';

  switchAlignement() {
    if(this.alignement === "right") this.alignement = "left";
    else this.alignement = "right";
  }
}
