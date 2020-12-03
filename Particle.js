class Particle{

    constructor(x,y,radius){
        var body_options={
            isStatic : false,
            restitution:0.4
          }
        this.radius=radius;
          this.body = Bodies.circle(x,y,this.radius,body_options);
          this.color=color(random(0,255),random(0,255),random(0,255));
          World.add(myWorld,this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
    pop();
    }
}