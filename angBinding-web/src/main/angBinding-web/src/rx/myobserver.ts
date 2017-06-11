export class MyObservor{
  next(val: any) {
    console.log(`In next the entry is : ${val}`);
  }

  erro(err: any) {
    console.log(`In error the entry is : ${err}`);
  }

  complete() {
    console.log(`Completed !!`);
  }


}
