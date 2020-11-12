https://antonshevchuk.gitbooks.io/jquery-for-beginners/content/40_animation/
https://habr.com/ru/post/38208/

.hide("slow"/ 10000ms)
.show()
.toggle(600, function () {
    alert("hide")
})

.slideUp()
slideToggle()


fadeIn()
fadeOut()
fadeToggle()
$('img').fadeTo("slow", 0.5) изменяет значение «opacity» до требуемого значения

$('img').animate({
    'opacity': 'hide'
},{
    duration: 10000;
    easing:
    'start':    () => console.log('start'),
  'progress': () => console.log('progress'),
  'done':     () => console.log('done'),
  'fail':     () => console.log('fail'),
  'always':   () => console.log('always')
}).animate({
    "left" : "122px"
})