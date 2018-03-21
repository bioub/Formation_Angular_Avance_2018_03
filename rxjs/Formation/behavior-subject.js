const Observable = require('rxjs').Observable;
const BehaviorSubject = require('rxjs').BehaviorSubject;

const subject$ = new BehaviorSubject(-1);

const interval$ = Observable.interval(1000).take(5);

interval$.subscribe(subject$);

subject$.subscribe((val) => {
  console.log('A', val);
});

setTimeout(() => {
  subject$.subscribe((val) => {
    console.log('B', val);
  });
}, 2500);