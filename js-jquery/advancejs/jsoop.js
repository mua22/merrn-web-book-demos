let circle = {
  radius: 5,
  border: 6,
  location: { x: 3, y: 5 },
};
circle["radius"] = 9;
console.log(circle.radius);
console.log(circle.location.x);
console.log(circle["location"]["x"]);
console.log(circle.color);
console.log(circle.location1?.z);
console.log(circle.constructor);
