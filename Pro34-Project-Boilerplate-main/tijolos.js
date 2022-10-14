class Tijolo{
    constructor(x,y){
        
        var options = {
            restitution: 0.8,
            isStatic:true,
            friction:0,
            density:1.2,
        }

        this.body = Bodies.rectangle(x,y,40,10,options);
        World.add(world,this.body);
    }
    show(){

        var pos = this.body.position;
        Rect(pos.x,pos.y);
    }
}