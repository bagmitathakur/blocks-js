class SlingShot{
    constructor(bodyA,pointB){
        var options={
        bodyA:bodyA,
        pointB:pointB,
        length:1.0,
        stiffness:0.04

        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.slingshot=Constraint.create(options);

        World.add(world,this.slingshot);
    }
    attach(bodyA){
        this.slingshot.bodyA=bodyA;


    }
    fly(){
        this.slingshot.bodyA=null;
    }
    display(){

        if(this.slingshot.bodyA){
        var pointA=this.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        stroke("turquoise")
        line(pointA.x,pointA.y,pointB.x,pointB.y);

        }
    }



}