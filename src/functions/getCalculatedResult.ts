export function getCalculatedResult(a: number, b: number) {
  const num1 = Promise.resolve(a);
  const num2 = Promise.resolve(b);

  Promise.all([num1, num2]).then((values) => {
    function add() {
      return values[0] + values[1];
    }

    function subtract() {
      return values[0] - values[1];
    }

    function multiply() {
      return add() * subtract();
    }

  });
}
