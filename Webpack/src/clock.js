let format;

if (true) {
  format = require('date-fns/format'); // dynamique et synchrone
}

export class Clock {
  constructor(element) {
    this._element = element;
  }
  _render() {
    this._element.innerText = format(new Date, 'HH:mm:ss');
  }
  start() {
    this._render();
    setInterval(this._render.bind(this), 1000);
  }
}