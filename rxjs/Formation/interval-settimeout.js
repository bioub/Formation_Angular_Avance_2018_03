const Observable = require('rxjs').Observable;

const interval$ = Observable.interval(1000)
          .take(5);


interval$.subscribe((val) => {
  console.log('A', val);
});

setTimeout(() => {
  interval$.subscribe((val) => {
    console.log('B', val);
  });
}, 2500);