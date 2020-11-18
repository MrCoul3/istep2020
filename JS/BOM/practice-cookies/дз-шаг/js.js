$(document).ready(function () {

    $("#start-ring").addClass("start-ring-rotate");
    $("#start-btn").click(function () {
        $("#start-btn").addClass("start-btn-rotate");
        $("#start-ring").removeClass("start-ring-rotate");
        $("#start-ring").addClass("start-ring-hide");
        $(".wrap").addClass("wrap-show");
    });


    class PaletteElem {
        constructor(color, type, code) {
            this.color = color;
            this.type = type;
            this.code = code;
        }

        append() {
            let paletteElement = document.createElement("div");
            let paletteElementInfo = document.createElement("div");
            let color = document.createElement("span");
            let type = document.createElement("span");
            let code = document.createElement("span");
            paletteElement.classList.add("palette-element");
            if (this.type === "RGB") {
                paletteElement.style.background = `rgb(${this.code})`
            } else if (this.type === "RGBA") {
                paletteElement.style.background = `rgba(${this.code})`
            } else if (this.type === "HEX") {
                paletteElement.style.background = this.code;
            }
            paletteElementInfo.classList.add("palette-element__info");
            color.classList.add("color");
            type.classList.add("type");
            code.classList.add("code");
            $(".palette").append(paletteElement);
            paletteElement.append(paletteElementInfo);
            paletteElementInfo.append(color, type, code);
            color.innerHTML = this.color;
            type.innerHTML = this.type;
            code.innerHTML = this.code;
        }
    }




    $("input[type='submit']").click(function (e) {
        e.preventDefault();
        let color = $("input[name='color']");
        let type = $("select[name='type']");
        let code = $("input[name='code']");
        let checkColor = $(".check-color");
        let checkCode = $(".check-code");
        let textCheckColor = "color can only contain letters";
        let textCheckCodeRGB = "RGB code must match the pattern [0-255], [0-255], [0-255]";
        let textCheckCodeRGBA = "RGBA code must match the pattern [0-255], [0-255], [0-255], [0-1]";
        let textCheckCodeHEX = "HEX code must be #-char and 6 digits or letters from A to F";
        console.log(code.val().match(/\b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, \b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, \b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b/g));
        
        if (color.val().length < 1 || !color.val().match(/[0-9%/*+-.]/g) == false) {
            check(checkColor, textCheckColor, color);

        } else if (code.val().length < 1 || (type.val() === "RGB" && (!code.val().match(/\b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, \b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, \b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b/g)) == true)) {
            check(checkCode, textCheckCodeRGB, code);

        } else if (code.val().length < 1 || (type.val() === "RGBA" && (!code.val().match(/\b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, \b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, \b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, [0-1]/g)) == true)) {
            check(checkCode, textCheckCodeRGBA, code);

        } else if (code.val().length < 1 || (type.val() === "HEX" && (!code.val().match(/#[A-f0-9][A-f0-9][A-f0-9][A-f0-9][A-f0-9][A-f0-9]/g)) == true)) {
            check(checkCode, textCheckCodeHEX, code);
        } 
        else {
            let newPalette = new PaletteElem(color.val(), type.val(), code.val());
            newPalette.append();
            if ($(".palette-element").length > 6) {
                $(".palette-element")[0].remove();
            }
            color.val("");
        }


    });

    function check(check, text, input) {
        check.html(text);
        input.focus(() => check.html(""));
    }














});