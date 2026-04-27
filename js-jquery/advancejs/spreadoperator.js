let arr = [1, 2, 3];
console.log(arr);
console.log(...arr);
let arr1 = [...arr]; // deep copy
console.log(arr1);
arr[0] = 100;
console.log(arr);
console.log(arr1);

let circle = { radius: 5, color: "red", location: { x: 7, y: 7 } };
let circle1 = { ...circle }; //deep copy ?
let circle2 = { ...circle, location: { ...circle.location } }; //true deep copy
circle.color = "green";
circle.location.x = 10;
console.log(circle1);
console.log(circle2);
