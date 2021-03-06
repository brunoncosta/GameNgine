export class Canvas {
    constructor(configs) {
        this._$game = document.getElementById(configs.canvas.id);
        this._context = this._$game.getContext(configs.canvas.context);
    }
    context() {
        return this._context;
    }
    width(set = null) {
        return set != null ? this._$game.width = set : this._$game.width;
    }
    height(set = null) {
        return set != null ? this._$game.height = set : this._$game.height;
    }
    init() {
        this._$game.width = window.innerWidth;
        this._$game.height = window.innerHeight;
    }
}
//# sourceMappingURL=canvas.js.map