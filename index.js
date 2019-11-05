circle_diameter = prompt("insert circle diameter! (in centimeters)");
const math_formula = ((`${circle_diameter}` / 2) ^ 2) * 3.14;

console.log(
  "the area size is " +
    math_formula +
    "because the math formula is ((circle_diameter/ 2) ^ 2) * 3.14"
);
