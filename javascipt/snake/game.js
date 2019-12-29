import Snake from './snake.js';
import Food from './food.js';

export default class Game {
    constructor (rows, columns, block_size) {
        block_size = block_size || 10;
        this.game_over = false;
        this.score = 0;
        this.rows = rows || Math.floor(window.innerHeight/block_size);
        this.columns = columns || Math.floor(window.innerWidth/block_size);
        this.snake = new Snake();
        this.food = new Food(this.rows, this.columns);
    }

    eat = function () {
        if (this.snake.head.x === this.food.x && this.snake.head.y === this.food.y) {
            this.snake.eat_food = true;
            this.score += 1;
            this.food.respawn();
        }
    }
    
    out = function () {
        if (this.snake.head.x > this.columns || this.snake.head.x < 0 || this.snake.head.y > this.rows || this.snake.head.y < 0) {
            this.game_over = true;
        }
        if (this.snake.ate_self()) {
            this.game_over = true;
        }
    }
    
    move_snake = function (direction, speed) {
        switch (direction) {
            case("left"):
                this.snake.move_left(speed);
                break;
            case("right"):
                this.snake.move_right(speed);
                break;
            case("up"):
                this.snake.move_up(speed);
                break;
            case("down"):
                this.snake.move_down(speed);
                break;
            default:
                break;
        }
    }

    next_frame = function (direction, snake_speed) {
        snake_speed = snake_speed || 1;
        this.move_snake(direction, snake_speed);
        this.eat();
        this.out();
    }

    get_snake_blocks = function() {
        return this.snake.body;
    }

    log_score = function () {
        console.log(this.score);
    }
}