import {Component} from "@angular/core";
import {Observable} from "rxjs/Rx";
import "rxjs/add/observable/from"
import "rxjs/add/observable/interval"
import {MyObserver} from "./myobserver";


@Component({
  selector: 'app-obsval',
  templateUrl: 'myobservable.component.html'
})
export class MyObservableComponent {
  _intStream: [number] = [1, 2, 3, 4, 5];
  _intStream2: [number] = [21, 1, 23, 4, 25];

  observerOutput: string = "";
  createObservableAndObserver() {
    this.observerOutput
    const observable$ = Observable.from(this._intStream);
    let myObserver = new MyObserver(this);
    observable$.subscribe(myObserver);
  }

  createObservableByFrom() {
    this.observerOutput
    const observable$ = Observable.from(this._intStream);
    const observor = observable$.subscribe(
      (val) => { console.log(val); this.observerOutput = this.observerOutput + "\n" + val.toString() },
      (err) => console.error(err),
      () => console.log('complete !')
    );
  }

  createObservableByCreate() {
    this.observerOutput = "";
    const observer = Observable.create((observer: any) => {
      for(let n of this._intStream){
        observer.next(n);
        if (n > 3) {
          observer.error('not allowed !!');
          this.observerOutput = this.observerOutput + '\n' + "Err : the value should be < 3"
        }
      }
      observer.complete();
    });

    observer.subscribe(
      (val) => { console.log(val); this.observerOutput = this.observerOutput + "\n" + val.toString() },
      (err: any) => console.error(err),
      () => console.log("Complete !")
    )
  }

  createObservableByMap() {
    this.observerOutput = "";
    const observable$ = Observable.from(this._intStream);
    const mapObservable$ = observable$.map(input => input * 1000);
    const observor = mapObservable$.subscribe(
      (val) => { console.log(val); this.observerOutput = this.observerOutput + "\n" + val.toString() },
      (err) => console.error(err),
      () => console.log('complete !')
    );
  }

  createObservableByInterval() {
    this.observerOutput = "";
    let observer$ = Observable.interval(1000);
    observer$.subscribe(
      (val) => { console.log(val); this.observerOutput = this.observerOutput + "\n" + val.toString() },
      (err) => console.error(err),
      () => console.log('complete !')
    );
  }

  createObservableFromEvent() {
    this.observerOutput = "";
    let observer$ = Observable.fromEvent(document, 'click');
    observer$.subscribe(
      (val) => { console.log(val); this.observerOutput = this.observerOutput + "\n" + val.toString() }
    );
  }

  displayTheMousePositionAfterClick() {
    this.observerOutput = "";
    let observer$ = Observable.fromEvent<MouseEvent>(document, 'mousemove');
    let observerPosition$ = observer$.map(mEvent => ({x: mEvent.clientX, y:mEvent.clientY}));
    observerPosition$.subscribe(
      (val) => { console.log(val); this.observerOutput = this.observerOutput + "\n" + val.toString() }
    );
    }

  createObservableWithConcat() {
    let observable1: Observable<number> = Observable.from(this._intStream);
    let observable2: Observable<number> = Observable.from(this._intStream2);

    let observer$ = Observable.concat(observable1,observable2).subscribe(
      (val) => { console.log(val); this.observerOutput = this.observerOutput + "\n" + val.toString() }
    )
  }

  createObservableWithMerge() {
    let observable1: Observable<number> = Observable.from(this._intStream);
    let observable2: Observable<number> = Observable.from(this._intStream2);

    let observer$ = Observable.concat(observable1,observable2).subscribe(
      (val) => { console.log(val); this.observerOutput = this.observerOutput + "\n" + val.toString() }
    )
  }

 /* createObservableWithMerge() {
    let observable1: Observable<number> = Observable.from(this._intStream);
    let observable2: Observable<number> = Observable.from(this._intStream2);

    let observer$ = observable1.merge(observable2).subscribe(
      (val) => { console.log(val);
                  this.observerOutput = this.observerOutput + "\n" + val.toString()
              }
    )
  }*/

  clearText() {
    this.observerOutput = "";
  }
}
