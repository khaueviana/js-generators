function * generator() {
    yield 1;
    yield 2;
    yield 3;
  }

  const gen = generator();

  gen.next();


function * fibonacci(seed1, seed2) {
    while (true) {
      yield (() => {
        seed2 = seed2 + seed1;
        seed1 = seed2 - seed1;
        return seed2;
      })();
    }
  }

  const fib = fibonacci(0,1)