class Platform{

constructor(x,y,w,h,color){

    let options = {
        isStatic:true
        
       };
       
       this.body = Bodies.rectangle(x, y, w, h, options);
       this.w = w;
       this.h = h;
       this.color = this.body.shapecolor;
       World.add(world, this.body);

}

show(){

    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill(100,100,100);
    rect(pos.x,pos.y, this.w, this.h);
    pop();

}




}

