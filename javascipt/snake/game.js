import Snake from './snake.js';
import Food from './food.js';

export default class Game {
    constructor(rows, columns) {
        this.game_over = false;
        this.score = 0;
        this.rows = rows;
        this.columns = columns;
        this.snake = new Snake();
        this.food = new Food(rows, columns);
    }

    eat = function () {
        if (this.snake.head.x === this.food.x && this.snake.head.y === this.food.y) {
            this.snake.eat_food();
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
        this.move_snake(direction, snake_speed);
        this.eat();
        this.out();
    }
}