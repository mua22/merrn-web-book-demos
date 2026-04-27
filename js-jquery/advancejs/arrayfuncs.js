let arr = [1, 2, 3, 4, 5];
let f = arr.find((x) => x == 3);
let fi = arr.findIndex((x) => x == 3);
console.log(`f: ${f}`);
console.log(`fi: ${fi}`);
console.log(arr);
arr.splice(1, 0, 9, 10);
console.log(arr);

let arrsquare = arr.map((a) => a * a);
console.log(arrsquare);
