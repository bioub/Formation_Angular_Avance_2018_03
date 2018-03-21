const interval = require('./interval');

const obs$ = interval(1000);

obs$.subscribe({
  next: (val) => {
    console.log(val);
  }
});