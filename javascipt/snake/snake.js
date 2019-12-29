import Block from './block.js';

export default class Snake {
    constructor (speed) {
        this.head = new Block(0, 0);
        this.current_direction = "right";
        this.speed = speed || 1;
        this.dx = speed;
        this.dy = 0;
        this.body = [this.head];
        this.eat_food = false;
    }

    turn = function (direction) {
        switch (direction) {
            case("left"):
                this.dx = -1 * this.speed;
                this.dy = 0;
                this.current_direction = "left";
                break;
            case("right"):
                this.dx = this.speed;
                this.dy = 0;
                this.current_direction = "right";
                break;
            case("up"):
                this.dx = 0;
                this.dy = -1 * this.speed;
                this.current_direction = "up";
                break;
            case("down"):
                this.dx = 0;
                this.dy = this.speed;
                this.current_direction = "down";
                break;
            default:
                break;
        }
    }

    move = function () {
        this.head = new Block(this.head.x + this.dx, this.head.y + this.dy);
        this.body.unshift(this.head);
        let popped_block = this.body.pop();
        if (this.eat_food) {
            this.body.push(popped_block);
            this.eat_food = false;
        }
    }

    allowed_direction = function (direction) {
        if (this.current_direction === "left" || this.current_direction === "right") {
            return direction === "up" || direction === "down";
        }
        else if (this.current_direction === "up" || this.current_direction === "down"){
            return direction === "left" || direction === "right";
        }
        else {
            return false;
        }
    }

    ate_self = function () {
        return this.body.filter(block => this.head.x === block.x && this.head.y === block.y).length > 1;
    }
}