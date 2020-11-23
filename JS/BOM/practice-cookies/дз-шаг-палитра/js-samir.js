const RGB = /^[0-9]{1,3}[,]{1}[0-9]{1,3}[,]{1}[0-9]{1,3}$/
const RGBA = /^[0-9]{1,3}[,]{1}[0-9]{1,3}[,]{1}[0-9]{1,3}[,]{1}[0]{1}[.]{1,5}[0-9]$/
const RGBAI = /^[0-9]{1,3}[,]{1}[0-9]{1,3}[,]{1}[0-9]{1,3}[,]{1}[1]{1}$/
const RGBAIO = /^[0-9]{1,3}[,]{1}[0-9]{1,3}[,]{1}[0-9]{1,3}[,]{1}[0]{1}$/
const HEX = /^#[A-Fa-f0-9]{6}$/
const LETTERS = /^[a-zA-Zа-яА-Я]+$/

let selectedType = $(".color_selector")
let inputInner = $(".color_input_code")
let colorName = $(".color_input")
let z;
let j;
let k;
let arrNames = [];
let objKeyNum;
let colors = {
  0: {
    name: "YELLOWGREEN",
    type: "rgb",
    code: "(154,205,50)",
    typeName: "RGB",
  },
  1: {
    name: "DARKCYAN",
    type: "rgba",
    code: "(0,139,139,0.3)",
    typeName: "RGBA",
  },
  2: {
    name: "ORANGERED",
    type: "#",
    code: "dc2c2c",
    typeName: "HEX"
  },
};


function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
};
  

function setCookie(name, value, options = {}) {
  options = {
    path: "/",

    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
};


function createElements(obj) {
    let n = 1
    for (let key in obj) {
      $(`.color_examples .color_example:nth-child(${n})`).css("background-color", `${colors[key].type}${colors[key].code}`);
      $(`.color_example:nth-child(${n}) .info_block`).append($(`<span>${colors[key].name} <br> ${colors[key].typeName} <br> ${colors[key].code}</span>`));
      objKeyNum = n;
      n++
   
  } 
}

function lastCookieNum() {
  z = 1;
  let cookieValue;
  cookieValue = getCookie(`name${z}`)
  for (z = 1; cookieValue !== undefined; z++) {
    cookieValue = getCookie(`name${z}`)
    if (cookieValue == undefined) {
      break
    } 
  }   
}

createElements(colors)
lastCookieNum()

 z > 1 ? j = z : j = 1;

 class ColorBlock {
  constructor(vals) {
    this.name = vals[0];
    this.typeName = vals[1];
    this.type = "rgb";
    this.code = `(${vals[2]})`;
  

    if (this.typeName == "HEX") {
      this.type = ""
      this.code = vals[2]
    }
    else if (this.typeName == "RGBA" ) {
      this.type = "rgba"
      }

  }
  createDivs() {
    $(".color_examples").append($(`<div class="color_example">`).css("background-color",`${this.type}${this.code}`).append($(`<div class="info_block"> <span>${this.name} <br> ${this.typeName} <br> ${this.code}</span> </div></div>`)))
   }
 
};

$(".save").on("click", function (event) {
    event.preventDefault()
   
    $('.alert_name_message').remove()
    $('.alert_message').remove()

  
  if (!LETTERS.test(colorName[0].value) || arrNames.indexOf(colorName[0].value) >= 0 ) {
        $(".color").append($('<span class = "alert_name_message">Для имени допускаются только буквы или введено занятое имя</span>'))
    };

    if (selectedType.val() == "RGB") {
        if (!RGB.test(inputInner[0].value)) {
        $(".color_code_text").append($('<span class = "alert_message"> RGB код должен следовать маске [0-255],[0-255],[0-255]</span>'))
        }
    };
   if (selectedType.val() == "RGBA") {
       if (!RGBA.test(inputInner[0].value) && !RGBAI.test(inputInner[0].value) && !RGBAIO.test(inputInner[0].value)) {
        $(".color_code_text").append($('<span class = "alert_message"> RGBA код должен следовать маске [0-255],[0-255],[0-255],[0-1]</span>'))
        }
    };
    if (selectedType.val() == "HEX") {
        if (!HEX.test(inputInner[0].value)) {
        $(".color_code_text").append($('<span class = "alert_message"> HEX код должен следовать маске #1-6[A-F]</span>'))
        }
  };

  if ($(".alert_name_message")[0] == undefined && $(".alert_message")[0] == undefined) {
    setCookie(`name${j}`, `${colorName[0].value};${selectedType.val()};${inputInner[0].value}`, { 'max-age': 10800 });
    let arrcount = arrNames.length
    arrNames[arrcount] = colorName[0].value 
  }
    let vals = getCookie(`name${j}`).split([";"])
    let newColorBlock = new ColorBlock(vals);
    newColorBlock.createDivs()
  j++
 
});

$(document).ready(function() {
  k = j - 1
  for (let b = 1 ; b <= k; b++){
    let vals = getCookie(`name${b}`).split([";"])
    let newColorBlock = new ColorBlock(vals);
    newColorBlock.createDivs()
    let arrcount = arrNames.length
    arrNames[arrcount] = newColorBlock.name 
  }
  
})
 

