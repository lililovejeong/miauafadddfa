class Box {
    constructor(x,y,width,height) {
        var box_options ={
            isStatic: true
        }

        this.box = Bodies.rectangle(x,y,width,height, box_options);
        this.width = width;
        this.height = height;
        World.add(world, this.box);
    }

    display() {
        var pos = this.box.position;
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
    }
}