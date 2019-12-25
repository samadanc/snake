export default class View {
    constructor (canvas, block_size) {
        this.canvas  = canvas;
        this.block_size = block_size;
        this.context = canvas.getContext("2d");
    }

    set_context_color = function (color) {
        this.context.fillStyle = color;
    }

    draw_board = function (width, height, color) {
        this.canvas.style.backgroundColor = color;
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.width = width.toString() + 'px';
        this.canvas.style.height = height.toString() + 'px';
    }

    draw_block = function (block, color) {
        this.set_context_color(color);
        this.context.fillRect(block.x * this.block_size, block.y * this.block_size, this.block_size, this.block_size);
    }

    draw_blocks = function (blocks, color) {
        blocks.forEach(block => this.draw_block(block, color));
    }

    clear = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}