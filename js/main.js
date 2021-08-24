// lets ;log our monsters to the conole and see what they have

console.log("the first monster is ", slowMonster);
console.log("the second monster is ", fastMonster);

console.log(hasSpeed, hasAge, toString);
// Why "[object Object]" ? Because we need to tell Javascript what to do for our object.
// So we need to override the "toString" method with a custom implementation.

console.log(fastMonster.health, fastMonster.speed, "|", fastMonster.toString());

// console.log(`I am the flying monster:`, flyingMonster);

console.log(
  flyingMonster.health,
  flyingMonster.speed,
  "|",
  flyingMonster.toString()
);

flyingMonster.attack();
