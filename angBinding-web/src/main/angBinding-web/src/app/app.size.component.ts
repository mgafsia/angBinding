import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  moduleId: module.id,  
  selector: 'mga-size',
  templateUrl: 'app.size.component.html'
})
export class AppSizeComponent {
    @Input() childSize: number;   
    @Output() childSizeChange = new EventEmitter<number>(); 
    
    increment() {
        this.resize(1);          
    }
    
    decrement() {
        this.resize(-1);        
    }
    
    resize(delta: number) {
        console.log("before : " + this.childSize);
        this.childSize = this.childSize + delta;  
        this.childSizeChange.emit(this.childSize);
        console.log("after : " + this.childSize);
    }
}
