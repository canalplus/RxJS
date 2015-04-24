  var CheckedObserver = (function (__super__) {
    inherits(CheckedObserver, __super__);

    function CheckedObserver(observer) {
      __super__.call(this);
      this._observer = observer;
      this._state = 0; // 0 - idle, 1 - busy, 2 - done
    }

    var CheckedObserverPrototype = CheckedObserver.prototype;

    CheckedObserverPrototype.onNext = function (value) {
      this.checkAccess();
      var res = this._observer.onNext(value);
      this._state = 0;
      return res;
    };

    CheckedObserverPrototype.onError = function (err) {
      this.checkAccess();
      var res = this._observer.onError(err);
      this._state = 2;
      return res;
    };

    CheckedObserverPrototype.onCompleted = function () {
      this.checkAccess();
      var res = this._observer.onCompleted();
      this._state = 2;
      return res;
    };

    CheckedObserverPrototype.checkAccess = function () {
      if (this._state === 1) { throw new Error('Re-entrancy detected'); }
      if (this._state === 2) { throw new Error('Observer completed'); }
      if (this._state === 0) { this._state = 1; }
    };

    return CheckedObserver;
  }(Observer));
