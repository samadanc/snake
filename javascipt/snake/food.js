import Block from './block.js';

export default class Food extends Block {
    constructor (game_rows, game_columns) {
        super(Math.floor(game_columns * Math.random()), Math.round(game_rows * Math.random()));
        this.game_rows = game_rows;
        this.game_columns = game_columns;
    }

    respawn = function () {
        this.x = Math.floor(this.game_columns * Math.random());
        this.y = Math.floor(this.game_rows * Math.random());
    }
}