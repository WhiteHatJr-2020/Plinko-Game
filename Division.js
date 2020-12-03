class Division{

    constructor(x,y,width,height){
        var body_options={
            isStatic : true
          }
        this.width=width;
        this.height=height;
          this.body = Bodies.rectangle(x,y,this.width,this.height,body_options)
          World.add(myWorld,this.body);
    }
    display(){
        
        fill("white");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
    }
}