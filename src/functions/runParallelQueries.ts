export function runParallelQueries() {
  const p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'один');
  });
  const p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 'два');
  });

  Promise.race([p1, p2]).then(function (value) {
    // console.log(value); // "два"
    // Оба вернули resolve, однако p2 вернул результат первым
  });
}
