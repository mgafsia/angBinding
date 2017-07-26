import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Rx";
import "rxjs/add/observable/from"
import "rxjs/add/observable/interval"
import {MyObserver} from "./myobserver";


@Component({
  selector: 'app-obsval',
  templateUrl: 'myobservable.component.html'
})
export class MyObservableComponent implements OnInit{
  _intStream: [number] = [1, 2, 3, 4, 5];
  _intStream2: [number] = [21, 1, 23, 4, 25];

  observerOutput: string = "";
  likeCounter: number = 0;


  ngOnInit() {
    this.intiLikeCounter();
  }

  createObservableAndObserver() {
    const observable$ = Observable.from(this._intStream);
    let myObserver = new MyObserver(this);
    observable$.subscribe(myObserver);
  }

  createObservableByFrom() {
    this.observerOutput = "";
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

  createObservableWithConcat2() {
    let observable1: Observable<String> = Observable.interval(1000).map(v => 'obc1:' + v);
    let observable2: Observable<String> = Observable.interval(1000).map(v => 'obc2' + v);

    let observer$ = Observable.concat(observable1,observable2).subscribe(
      (val) => { console.log(val); this.observerOutput = this.observerOutput + "\n" + val.toString() }
    )
  }

  createObservableWithMerge2() {
    let observable1: Observable<String> = Observable.interval(1000).map(v => 'obm1:' + v);
    let observable2: Observable<String> = Observable.interval(1000).map(v => 'obm2' + v);

    let observer$ = Observable.concat(observable1,observable2).subscribe(
      (val) => { console.log(val); this.observerOutput = this.observerOutput + "\n" + val.toString() }
    )
  }

  intiLikeCounter() {
    let likeMeButton = document.getElementById('likeme');
    let unLikeMeButton = document.getElementById('unlikeme');
    let likeMeObservable = Observable.fromEvent(likeMeButton, 'click');
    let unLikeMeObservable = Observable.fromEvent(unLikeMeButton, 'click');

    let likeMeObserver = likeMeObservable.subscribe((clickEvent) => this.likeCounter++);
    let unLikeMeObserver = unLikeMeObservable.subscribe((clickEvent) => this.likeCounter--);
  }


  clearText() {
    this.observerOutput = "";
  }
}
