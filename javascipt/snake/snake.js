import Block from './block.js';

export default class Snake {
    constructor () {
        this.head = new Block(0, 0);
        this.curr_direction = "";
        this.dx = 0;
        this.dy = 0;
        this.body = [this.head];
        this.eat_food = false;
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
        this.head = new Block(this.head.x + this.dx, this.head.y + this.dy);
        this.body.unshift(this.head);
        let popped_block = this.body.pop();
        if (this.eat_food) {
            this.body.push(popped_block);
            this.eat_food = false;
        }
    }

    ate_self = function () {
        return this.body.filter(block => this.head.x === block.x && this.head.y === block.y).length > 1;
    }
}