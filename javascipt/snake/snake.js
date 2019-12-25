import Block from './block.js';

export default class Snake {
    constructor () {
        this.head = new Block(0, 0);
        this.curr_direction = "";
        this.dx = 0;
        this.dy = 0;
        this.body = [this.head];
    }

    eat_food = function () {
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
            default:
                break;
        }
    }

    move_left = function (speed) {
        this.dx = -1 * speed;
        this.dy = 0;
        this.curr_direction = "left";
        this.move();
    }

    move_right = function (speed) {
        this.dx = speed;
        this.dy = 0;
        this.curr_direction = "right";
        this.move();
    }

    move_up = function (speed) {
        this.dx = 0;
        this.dy = -1 * speed;
        this.curr_direction = "up";
        this.move();
    }

    move_down = function (speed) {
        this.dx = 0;
        this.dy = speed;
        this.curr_direction = "down";
        this.move();
    }

    move = function () {
        this.head = new Block(this.head.x + this.dx, this.head.y + this.dy)
        this.body.splice(0, 0, this.head);
        this.body.pop();
    }

    ate_self = function () {
        for (var i = 1; i < this.body.length; i++) {
            if (this.head.x === this.body[i].x && this.head.y === this.body[i].y) {
                return true;
            }
        }
        return false;
    }
}