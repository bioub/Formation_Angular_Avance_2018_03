const interval = require('./interval');
require('./map');

const obs$ = interval(1000).map((val) => val ** 2);

obs$.subscribe({
  next: (val) => {
    console.log(val);
  }
});