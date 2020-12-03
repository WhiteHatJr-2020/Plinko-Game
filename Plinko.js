class Plinko{

    constructor(x,y){
        var body_options={
            isStatic : true
          }
        this.radius=10;
          this.body = Bodies.circle(x,y,this.radius,body_options)
          World.add(myWorld,this.body);
    }
    display(){
        push();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    pop();
    }
}