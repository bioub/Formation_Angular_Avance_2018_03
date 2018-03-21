const Observable = require('rxjs').Observable;
const Subject = require('rxjs').Subject;

const subject$ = new Subject();

const interval$ = Observable.interval(1000).take(1);

interval$.subscribe(subject$);

subject$.subscribe((val) => {
  console.log('A', val);
});

setTimeout(() => {
  subject$.subscribe((val) => {
    console.log('B', val);
  });
}, 1500);