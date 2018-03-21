const Observable = require('./observable');

const obs$ = new Observable((observer) => {
  let cpt = 0;
  setInterval(() => {
    observer.next(++cpt);
  }, 1000);
});
