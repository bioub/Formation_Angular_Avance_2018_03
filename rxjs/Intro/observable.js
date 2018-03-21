class Observable {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }

  subscribe(observer) {
    this._subscribe(observer);
  }
}

module.exports = Observable;