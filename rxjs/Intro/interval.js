const Observable = require('./observable');

function interval(delay) {
  return new Observable((observer) => {
    let cpt = 0;
    setInterval(() => {
      observer.next(++cpt);
    }, delay);
  });
}

module.exports = interval;