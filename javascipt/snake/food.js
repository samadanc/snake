import Block from './block.js';

export default class Food extends Block {
    constructor (game_rows, game_columns) {
        super(Math.round(game_rows * Math.random()), Math.round(game_columns * Math.random()));
        this.game_rows = game_rows;
        this.game_columns = game_columns;
    }

    respawn = function () {
        this.x = Math.round(this.game_rows * Math.random());
        this.y = Math.round(this.game_columns * Math.random());
    }
}