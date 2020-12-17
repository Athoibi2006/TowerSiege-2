class Block{
  constructor(x,y,width,height){
     var options={
         friction : 0,
         density : 0.2,
         restitution : 0.4
     }
     this.Visibility = 225;
     this.body=Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body);
     this.width=width;
     this.height=height;
  }

  display(){
  if( this.body.speed < 3){
  var pos =this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  rectMode(CENTER);
  rect(0, 0, this.width, this.height);
  pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      pop();
    }
  }
}
