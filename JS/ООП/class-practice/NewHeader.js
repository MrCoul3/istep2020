class NewHeader extends Header {
    constructor(h1, h2, hero) {
       super(h1, h2)
        this._hero = hero;
    }
    get hero(){
        return this._hero;
    }
    set hero(param){
        this._hero = param;
    }
}

exports = {NewHeader}