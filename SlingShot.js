class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
       
        this.sling3 = loadImage("PluckingMangoes/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            stroke(48,22,8);
            if(pointA.x<220){
                line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+20, pointB.y);
                image(this.sling3,pointA.x-30,pointA.y-10,10,20);
            }
            else{
                line(pointA.x+25, pointA.y+10, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y+10, pointB.x+20, pointB.y);
                image(this.sling3,pointA.x+20,pointA.y,10,20);
            }
            
        }
    }
    
}