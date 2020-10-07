class Paper {
    constructor(x, y, r) {
    var options = {
        isStatic: false,
        restituition: 0.3,
        friction: 0.5,
        density: 1.2,
    }
    this.y = y;
    this.x = x;
    this.r = r;
    this.Body = Bodies.circle(this.x, this.y, this.r / 2, options)
    World.add(world, this.body);
}
display()
{
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill(255, 0, 255);
    ellipse(0, 0, this.r, this.r);
    pop();
}    
}