class Boat {
  constructor(x, y, width, height, boatPos, boatAnimation /* recebemos a animação como argumento*/) {
  
    //08. criamos nova propriedade animation e speed
    this.animation = boatAnimation;
    this.speed = 0.05;
    this.isBroken = false;

    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;

    this.boatPosition = boatPos;

    World.add(world, this.body);
  }
  
  //11. função que fará a animação ficar cada vez mais rápida
  animate() {
    this.speed += 0.05;
  }

  remove(index) {
    this.animation = brokenBoatAnimation;
    this.speed = 0.05;
    this.width = 300;
    this.height = 300;
    this.isBroken = true;
    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      delete boats[index];
    }, 2000);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;

    //09. 
    var index = floor(this.speed % this.animation.length);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);

    //10. adicionamos a animação
    image(this.animation[index], 0, this.boatPosition, this.width, this.height);
    pop();
  }
}
