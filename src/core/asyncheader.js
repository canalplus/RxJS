    // Aliases
    var Observable = Rx.Observable,
    	observableProto = Observable.prototype,
      AnonymousObservable = Rx.AnonymousObservable,
      AsyncSubject = Rx.AsyncSubject,
      disposableCreate = Rx.Disposable.create,
      CompositeDisposable= Rx.CompositeDisposable,
      immediateScheduler = Rx.Scheduler.immediate,
      slice = Array.prototype.slice;
