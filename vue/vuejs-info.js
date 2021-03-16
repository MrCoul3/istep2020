// Однофайловые компоненты
new Vue({ el: '#test' });

Vue.component('test', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">Счётчик кликов — {{ count }}</button>'
});

<div id="test">
    <test></test>
</div>
------------------------------------

<div id="test" :class="dinamicClass"> // :class или v-bind указываем любой класс
    <div> {{ id }} </div> // 1
    <p v-if="status">истина</p> //3
    <p v-else>ложь</p>//3
</div>
</div>

let app = new Vue({
    el: "#test", //Id элемента
    data: {
        id: "hello", //1
        dinamicClass: 'myclass',
        status: true //3
    }
});
_________________________________
    // v-if v-else
<div id="test">
    <p v-if="status == 1"> 1 </p>
    <p v-else-if="status == 2">2 </p>
    <p v-else>свойство равно {{ status }}</p>
</div>
let app = new Vue({
    el: "#test",
    data: {
        status: 1
    }
});
_________________________________
    //templates
<template v-if="status == 1">
    <h2>Истина</h2>
    <p>описание</p>
    <p>описание</p>
    <p>описание</p>
    </template>
    <template v-else>
<h2>else </h2>
<span>привет, это ложь</span>
</template>

let app = new Vue({
    el: "#test",
    data: {
        status: 1
    }
});
//Добраться через js До свойства экземпляра класса newVue можно
// app.status = 1;
_________________________________
    //v-show
<h1 v-show="status">v-show</h1>
app.status = 1;//(2,100, true) // элемент виден display: block
app.status = 0; //(/false); // элемент невиден display: none
_________________________________
// Для работы с классами
<div class="default-class" :class="{ myclass: active, 'btn-default': btn }">myclass active</div> // здесь active берется из data vue
// имя класса myclass будет отображатсья если  active: true или 1
// 'btn-default' если используется cebub case то  нужно заключать в ковычки
// можно добавлять и динамические и обычные классы class="default-class" всегда остается
let app = new Vue({
    el: "#test",
    data: {
        active: false,
        btn: true
    }
});
_________________________________
// тернарный оператор

<div :class="[ active ? 'classTrue anothert-true-class' : 'classFalse', 'default']">тернарный оператор</div>
// через пробел можно указывать сколько угодно классов
let app = new Vue({
    el: "#test",
    data: {
        active: false,
        btn: true
    }
});
_________________________________
// :style
<div :style="{background: redColor}">:style</div>

let app = new Vue({
    el: "#test",
    data: {
        redColor: 'red'
    }
});
_________________________________
// метод перебора v-for (как foreach)
<div id="list">
    <ul v-for="(item, index) in list">
        <li>{{index}} : {{item}} </li>
    </ul>
<table border="1">
    <thead>
        <th>id</th>
        <th>name</th>
    </thead>
    <tbody>
        <tr v-for="user in users">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
        </tr>
    </tbody>
</table>
</div>

let list = new Vue({
    el: "#list",
    data: {
        list: ['one', 'two', 'three'],
        users: [
            {id: 1, name: 'Coul'},
            {id: 2, name: ' Ivan'}
        ]
    },
    methods: {

    }
});
_________________________________
//  события v-on или @события - @click -  события при клике
<button id="my-btn" @click="countFunc">кликов {{count}}</button>

let event = new Vue({
    el: "#my-btn",
    data: {
        count: 0
    },
    methods: {
        //название функции
        countFunc() {
            this.count += 1;
        }
    }
});

_________________________________
//Модификаторы событий
// что бы  вызывать event.preventDefault()
<!-- событие submit больше не будет перезагружать страницу -->
<form v-on:submit.prevent="onSubmit"></form>
// список модификаторов
// .stop событие click не будет всплывать дальше
// .prevent
// .capture
// .self
// .once
// .passive
_________________________________
// хуки жизненного цикла
//Каждый экземпляр Vue при создании проходит через последовательность шагов инициализации
let event = new Vue({
    el: "#my-btn",
    data: {
        count: 0
    },
    created: function() {
        this.count = 3; // установит счетчик равный 3
        this.countFunc();
        console.log() // в created можно использовать консоль для отладки
    },
    methods: {
        //название функции
        countFunc() {
            this.count++;
        }
    }
});
//created для выполнения кода после создания экземпляра
// Существуют и другие хуки, вызываемые на различных стадиях жизненного цикла экземпляра, например mounted, updated и destroyed
_________________________________
// axios - npm install axios https://github.com/axios/axios

let async = new Vue({
    el: "#async-btn",
    data: {
        dataArray: [],
        url: 'handle.php'
    },
    created: function() {

    },
    methods: {
        getData(){
            // при использоваии стрелочной функции она не создает свой контекст this
            axios.get(this.url).then((response) => {
                console.log(response.data);
                this.dataArray = response.data;
            });
            // при вызове обычной функции она создает свой контекст this
            //поэтому нужно использовать async.dataArray вместо this.dataArray
            axios.get(this.url).then(function(response){
                console.log(response.data);
                async.dataArray = response.data;
            });
        }
    }
});
_________________________________
// v-model для двунаправленного связывания данных с элементами форм input, textarea и select.
    // watch - Наблюдатель
<div id="inputs">
    <input type="text" v-model="inputText">
    <input :value=inputText>
</div>

let inputs = new Vue({
    el: "#inputs",
    data: {
        inputText: ''
    },
    watch: {
        inputText: function () {
            if (this.inputText.length > 3) {
                this.inputText = 'больше трех символов';
            }
        }
    }
});
_________________________________
// Отправка fetch 
methods: {
    sendRequest() {
        fetch('handle.php', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.inputData)
        });
        this.getData();
    },
    // получение данных с сервера 
    getData() {
        axios.get(this.url).then((response) => {
            console.log(response.data);
            // this.responseData = data.data;
        })
    },
    _________________________________
    // полный запрос к форме через axios
    <form id="form">
        <div>
            <input v-model="inputData.name" type="text" placeholder="name">
        </div>
        <div>
            <input v-model="inputData.password" type="text" placeholder="password">
        </div>
            <input @click.prevent="request" type="submit">
    </form>

    let form = new Vue({
        el: '#form',
        data: {
            url: 'handle.php',
            inputData: {
                name: '',
                password: '',
                'method': 'test'
            },
            responseData: []
        },
        methods: {
            
            request() {
                axios.post('handle.php', JSON.stringify(this.inputData))
                    .then((response) => {
                        console.log(response.data);
                        this.responseData = response.data;
                    })
            },
            test() {

            }
        }
    });
