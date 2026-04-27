let circle = { radius: 5, border: 10 };
let circle1 = circle; //shallow copy
circle1.radius = 7;
// circle.radius ?
console.log(circle.radius);
let circle2 = { radius: circle.radius, border: circle.border }; //deep copy
circle2.radius = 15;
console.log(circle.radius);
console.log(Object.keys(circle));
console.log(circle.__proto__);
