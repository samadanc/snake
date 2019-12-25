import Game from './javascipt/snake/game.js';
import View from './javascipt/view.js';
import Controller from './javascipt/controller.js';

/* Constants (will default to these, if undefined input) */
const width = window.innerWidth;
const height = window.innerHeight;
const board_color = '#272727';
const snake_color = 'white';
const food_color = '#ff8787';
const snake_speed = 1;
const block_size = 10;
const rows = width / block_size;
const columns = height / block_size;


/* Extra CRUD */
let pop_up_1 = document.getElementById("pop-up-1");
let pop_up_2 = document.getElementById("pop-up-2");
let play_button_1 = document.getElementById("play-1");
let play_button_2 = document.getElementById("play-2");
let canvas = document.getElementById("snake");

pop_up_1.style.display = "block";

function play_button() {
    pop_up_1.style.display = "none";
    pop_up_2.style.display = "none";
    play_game(canvas);
}
play_button_1.onclick = play_button;
play_button_2.onclick = play_button;


// listener to disable scrolling
window.addEventListener('scroll', function() {
    window.scrollTo(0, 0);
});


/* Game CRUD */
function play_game(my_canvas) {

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

    let game = new Game(rows, columns, block_size);
    let view = new View(my_canvas, block_size);
    let controller = new Controller("right");
    let snake_interval = 0;
    let score = 0;
    view.draw_board(width, height, board_color);

    (function play_snake () {
        snake_interval = window.setInterval(() => {
            draw(view, game, controller.current_direction);
            document.addEventListener('keydown', change_direction);
            if (game.game_over) {
                window.clearInterval(snake_interval);
                document.getElementById("score").innerHTML = game.score.toString();
                pop_up_2.style.display = "block";
            }
        }, 80);

    })();
}