$(document).ready(function () {
    console.log(document.createElement("span"))
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
            // console.log(color);
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

    let color = $("input[name='color']");
    let type = $("select[name='type']");
    let code = $("input[name='code']");
    let paletteObj = {
        
    };
    // console.log(getCookie("0"))
    // console.log(getCookie(paletteObj.length));
    // console.log(JSON.parse(getCookie("length")));
    // console.log(JSON.parse(getCookie("0")));
    // console.log(getCookie("0"));
    let numOfElements = (getCookie("length") === undefined) ? 0 : JSON.parse(getCookie("length"));
    for (let i = 0; i < numOfElements; i++) {
        console.log(i)
        console.log(getCookie(`${i}`));
        let newPalette = new PaletteElem(JSON.parse(getCookie(`${i}`)).color, JSON.parse(getCookie(`${i}`)).type, JSON.parse(getCookie(`${i}`)).code);
        newPalette.append();
    }
    // console.log(JSON.parse(getCookie("0")));
    // color.val((getCookie(color.val()) === undefined) ? "" : JSON.parse(getCookie( color.val() ).color ));


    

    let count = 0;
    $("input[type='submit']").click(function (e) {
        
        e.preventDefault();

        let checkColor = $(".check-color");
        let checkCode = $(".check-code");
        let textCheckColor = "color can only contain letters";
        let textCheckCodeRGB = "RGB code must match the pattern [0-255], [0-255], [0-255]";
        let textCheckCodeRGBA = "RGBA code must match the pattern [0-255], [0-255], [0-255], [0-1]";
        let textCheckCodeHEX = "HEX code must be #-char and 6 digits or letters from A to F";


        if (color.val().length < 1 || !color.val().match(/[0-9%/*+-.]/g) == false) {
            check(checkColor, textCheckColor, color);

        } else if (code.val().length < 1 || (type.val() === "RGB" && (!code.val().match(/\b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, \b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, \b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b/g)) == true)) {
            check(checkCode, textCheckCodeRGB, code);

        } else if (code.val().length < 1 || (type.val() === "RGBA" && (!code.val().match(/\b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, \b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, \b(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\b, [0-1]/g)) == true)) {
            check(checkCode, textCheckCodeRGBA, code);

        } else if (code.val().length < 1 || (type.val() === "HEX" && (!code.val().match(/#[A-f0-9][A-f0-9][A-f0-9][A-f0-9][A-f0-9][A-f0-9]/g)) == true)) {
            check(checkCode, textCheckCodeHEX, code);
        } else {
            count += 1;

            let newPalette = new PaletteElem(color.val(), type.val(), code.val());
            newPalette.append();
            paletteObj[count-1] = newPalette;
            paletteObj.length = document.querySelectorAll(".palette-element").length;
            let jsonLength = JSON.stringify(paletteObj.length);
            setCookie("length", jsonLength);
            let json = JSON.stringify(paletteObj[count-1] );
            // let json = JSON.stringify(paletteObj);
            // console.log(json);
            setCookie((count-1), json);
            // console.log(paletteObj);


            
            if ($(".palette-element").length > 6) {
                $(".palette-element")[0].remove();
            }
            // color.val("");
            // code.val("");
        }
    
    });


    
    function check(check, text, input) {
        check.html(text);
        input.focus(() => check.html(""));
    }

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function setCookie(name, value, options = {}) {

        options = {
          path: '/',
        };
      
        if (options.expires instanceof Date) {
          options.expires = options.expires.toUTCString();
        }
      
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
      
        for (let optionKey in options) {
          updatedCookie += "; " + optionKey;
          let optionValue = options[optionKey];
          if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
          }
        }
      
        document.cookie = updatedCookie;
      }





});