function Monster(speed) {
  //Properities:
  Monster.prototype.health = 50;
  this.src = "THE_URL_OF_THE_IMAGE";
  this.speed = speed;

  //method:
  this.attack = function () {
    alert("I am a bad Monster. Run for your Life!");
  };

  Monster.prototype.toString = function () {
    return `Monster has ${this.health}hp and ${this.speed} kmh `;
  };
}

const slowMonster = new Monster(30);
const fastMonster = new Monster(100);

// Try These Functions:
let hasSpeed = slowMonster.hasOwnProperty("speed"); // true
let hasAge = slowMonster.hasOwnProperty("age"); // false because our monster does not have a defined age property.
let toString = slowMonster.toString(); // "[object Object]"
