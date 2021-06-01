class Header {
    constructor(h1, h2) {
        this.h1 = h1;
        this.h2 = h2;
    }

    render(place) {
        let out = '';
        out += `<h1>${this.h1}</h1>`;
        out += `<h2>${this.h2}</h2>`;
        let comp = document.getElementById(place);
        comp.innerHTML = out;
    }
    // сервисные действия
    static hello(a){
        console.log('static method ' + a)
    }
}

exports = {Header}