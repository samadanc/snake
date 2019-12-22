const canvas_scale = 10;
const rows = snake_canvas.width / canvas_scale;
const columns = snake_canvas.height / canvas_scale;

var display = new Display(document.getElementById("snake"));
const c = snake_canvas.getContext("2d");

(function name(params) {
    game = new Game(rows, columns);
    
    window.setInterval(() => {
        game.next_frame();
    }, 250);
}());