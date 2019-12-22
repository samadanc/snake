class Snake {
    constructor () {
        this.head = new Block(0, 0);
        this.curr_direction = "left";
        this.body = [this.head];
    }

    eat_food = function () {
        tail = this.body[this.body.length-1];
        switch (this.curr_direction) {
            case("left"):
                this.body.push(new Block(this.head.x-1, this.head.y));
                break;
            case("right"):
                this.body.push(new Block(this.head.x+1, this.head.y));
                break;
            case("up"):
                this.body.push(new Block(this.head.x, this.head.y-1));
                break;
            case("down"):
                this.body.push(new Block(this.head.x, this.head.y+1));
                break;
        }
    }
    
    move_left = function () {
        this.curr_direction = "left";
        this.body.splice(0, 0, new Block(this.head.x-1, this.head.y));
        this.body.pop();
    }
    
    move_right = function () {
        this.curr_direction = "right";
        this.body.splice(0, 0, new Block(this.head.x+1, this.head.y));
        this.body.pop();
    }
    
    move_up = function () {
        this.curr_direction = "up";
        this.body.splice(0, 0, new Block(this.head.x, this.head.y-1));
        this.body.pop();
    }
    
    move_down = function () {
        this.curr_direction = "down";
        this.body.splice(0, 0, new Block(this.head.x+1, this.head.y+1));
        this.body.pop();
    }

    ate_self = function () {
        for (var i = 0; i < this.body.length; i++) {
            if (this.head.x === this.body[i].x && this.head.y === this.body[i].y) {
                return true;
            }
        }
        return false;
    }
}