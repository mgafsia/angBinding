import {Component} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from"
import "rxjs/add/observable/interval"


@Component({
  selector: 'app-obsval',
  templateUrl: 'myobservable.component.html'
})
export class MyObservableComponent {
  _intStream: [number] = [1, 2, 3, 4, 5];

  createObservableByFrom() {
    const observable$ = Observable.from(this._intStream);
    const observor = observable$.subscribe(
      (val) => console.log(val),
      (err) => console.error(err),
      () => console.log('complete !')
    );
  }


  createObservableByCreate() {
    const observer = Observable.create((observer: any) => {
      for(let n of this._intStream){
        observer.next(n);
        if (n > 3) {
          observer.error('not allowed !!');
        }
      }
      observer.complete();
    });

    observer.subscribe(
      (val: any) => console.log(val),
      (err: any) => console.error(err),
      () => console.log("Complete !")
    )
  }

  createObservableByMap() {
    const observable$ = Observable.from(this._intStream);
    const mapObservable$ = observable$.map(input => input * 1000);
    const observor = mapObservable$.subscribe(
      (val) => console.log(val),
      (err) => console.error(err),
      () => console.log('complete !')
    );
  }

  createObservableByInterval() {
    let observer$ = Observable.interval(1000);
    observer$.subscribe(
      (val) => console.log(val),
      (err) => console.error(err),
      () => console.log('complete !')
    );
  }

  createObservableFromEvent() {
    let observer$ = Observable.fromEvent(document, 'click');
    observer$.subscribe(
      obs => console.log(obs)
    );
  }

  displayTheMousePositionAfterClick() {
    let observer$ = Observable.fromEvent<MouseEvent>(document, 'mousemove');
    let observerPosition$ = observer$.map(mEvent => ({x: mEvent.clientX, y:mEvent.clientY}));

    observer$.subscribe(
        obs => console.log(observer$)
      );
    }
}
