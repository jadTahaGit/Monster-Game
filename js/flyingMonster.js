function FlyingMonster(speed) {
  //extend the monster class
  this.speed = speed;
  //   Monster.call(this.speed);

  this.attack = function () {
    console.log("I am a Flying monster so I attack in a better way");
  };
}

FlyingMonster.prototype = Object.create(Monster.prototype);

const flyingMonster = new FlyingMonster(400);
