class bob {
    constructor(x,y,r){
        var options={
            isStatic:false,
            density:0.8,
            restitution:1,
            friction:0

        }

        this.x=x;
        this.y=y;
        this.r=r;

        this.body=Bodies.circle(this.x, this.y, this.r, options);
        World.add(world,this.body);

    }

    display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        strokeWeight(4);
        stroke("black")
        fill(244,0,249);
        ellipse(0,0,this.r,this.r);
        pop();

    }
}