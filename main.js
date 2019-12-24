import Game from './javascipt/snake/game.js';
import View from './javascipt/view.js';
import Controller from './javascipt/controller.js';

const width = 500;
const height = 500;
const board_color = 'black'; //#3e3e3e
const snake_color = 'white';
const food_color = 'blue';
const snake_speed = 10;
const block_size = 10;
const rows = width / block_size;
const columns = height / block_size;

function draw (display, a_game) {
    view.clear();
    view.draw_board(0, 0, width, height, board_color);
    display.draw_blocks(a_game.snake.body, block_size, snake_color);
    display.draw_block(a_game.food, block_size, food_color);
    a_game.next_frame("right", snake_speed);
}

var game = new Game(rows, columns);
var view = new View(document.getElementById("snake"));
draw(view, game);

function play_snake () {
    window.setInterval(() => {
        draw(view, game);
    }, 250);
}

while (!game.game_over) {
    play_snake();
}

console.log(game.score);