class rope{
    constructor(bodyA, bodyB, offsetX, offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);

    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(3);
        var AnchorX= pointA.x;
        var AnchorY= pointA.y;

        var anchorX=pointB.x+this.offsetX;
        var anchorY= pointB.y+this.offsetY;

        line(AnchorX, AnchorY, anchorX, anchorY);

    }
}