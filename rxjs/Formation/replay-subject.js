const Observable = require('rxjs').Observable;
const ReplaySubject = require('rxjs').ReplaySubject;

const subject$ = new ReplaySubject(1);

const interval$ = Observable.interval(1000).take(1);

interval$.subscribe(subject$);

subject$.subscribe((val) => {
  console.log('A', val);
});

setTimeout(() => {
  subject$.subscribe((val) => {
    console.log('B', val);
  });
}, 2500);