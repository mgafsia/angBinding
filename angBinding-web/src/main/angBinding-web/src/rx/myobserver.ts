import {MyObservableComponent} from "./myobservable.component";
export class MyObserver{
  myObservableComponent: MyObservableComponent;

  constructor(myObservableComponent: MyObservableComponent) {
    this.myObservableComponent = myObservableComponent;
  }

  next(val: any) {
    console.log(`In next the entry is : ${val}`);
    this.myObservableComponent.observerOutput = val + '<br/>' + this.myObservableComponent.observerOutput;
  }

  erro(err: any) {
    console.log(`In error the entry is : ${err}`);
  }

  complete() {
    console.log(`Completed !!`);
  }
}
