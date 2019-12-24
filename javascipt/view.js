export default class View {
    constructor (canvas) {
        this.canvas  = canvas;
        this.context = canvas.getContext("2d");
    }

    set_context_color = function (color) {
        this.context.fillStyle = color;
    }

    draw_board = function (x, y, width, height, color) {
        this.canvas.style.backgroundColor = color;
    }

    draw_block = function (block, length, color) {
        this.set_context_color(color);
        this.context.fillRect(block.x, block.y, length, length);
    }

    draw_blocks = function (blocks, length, color) {
        blocks.forEach(block => this.draw_block(block, length, color));
    }

    clear = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}