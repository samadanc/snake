export default class Controller {
    constructor (event) {
        this.event = event;
        this.direction = this.get_direction(event.key_code);
    }

    get_direction = function (key_code) {
        switch(key_code) {
            case 37:
                return "left";
            case 38:
                return "up";
            case 39:
                return "right";
            case 40:
                return "down";
            default:
                return "";
        }
    }
}