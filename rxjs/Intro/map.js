const Observable = require('./observable');

Observable.prototype.map = function (transformFn) {
  const input$ = this;
  return new Observable((observer) => {
    input$.subscribe({
      next: (val) => {
        observer.next(transformFn(val));
      },
    });
  });
}