export default class Controller {
    constructor (current_direction) {
        this.current_direction = current_direction;
    }

    get_direction = function (event_key) {
        switch(event_key){
            case "ArrowLeft": return "left";
            case "ArrowUp": return "up";
            case "ArrowRight": return "right";
            case "ArrowDown": return "down";
            default: return "";
        }
    }
}