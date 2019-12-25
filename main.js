import Game from './javascipt/snake/game.js';
import View from './javascipt/view.js';
import Controller from './javascipt/controller.js';

const width = 500;
const height = 500;
const board_color = 'black'; //#3e3e3e
const snake_color = 'white';
const food_color = '#ff8787';
const snake_speed = 1;
const block_size = 10;
const rows = width / block_size;
const columns = height / block_size;

function draw (display, a_game, snake_direction) {
    display.clear();
    display.draw_blocks(a_game.get_snake_blocks(), snake_color);
    display.draw_block(a_game.food, food_color);
    a_game.next_frame(snake_direction, snake_speed);
}

function change_direction (e) {
    let direction = controller.get_direction(e.key);
    if (direction != "") {
        controller.current_direction = direction;
    }
}

let game = new Game(rows, columns);
let view = new View(document.getElementById("snake"), block_size);
let controller = new Controller("right");
let snake_interval = 0;
view.draw_board(width, height, board_color);

function play_snake () {
    snake_interval = window.setInterval(() => {
        draw(view, game, controller.current_direction);
        document.addEventListener('keydown', change_direction);
        if (game.game_over) {
            window.clearInterval(snake_interval);
            console.log("GAME OVER");
            console.log("Score: "+ game.score.toString());
        }
    }, 80);

};

play_snake();