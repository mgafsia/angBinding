import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:   `<div>name : {{name}} <p>
                    Age : {{age}} <p>
                    Adresse : {{address.street}} - {{address.city}}
 
                </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "mohamed";
  age:number = 36;
  address:any = {
      street : 'Rue des rues',
      city : '78180 Montigny Le Bretonneux'
  };
}
