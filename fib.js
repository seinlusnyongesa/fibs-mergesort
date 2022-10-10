function fibs(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      arr.push(i);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  return arr;
}
// console.log(fibs(8));

function fibsRec(n, arr = [0, 1]) {
  if (n <= 0) return [arr[0]];
  if (n <= 1) return [...arr];

  arr = [...arr, arr.length - 1 + arr.length - 2];
  return fibsRec(n - 1, arr);
}

console.log(fibsRec(8));
