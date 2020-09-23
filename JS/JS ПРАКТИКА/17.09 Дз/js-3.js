// Реализовать обмен валют.
// Обменник должен уметь обменивать рубли на доллары и доллары на рубли.

// Как должен работать обменник:

// В константах необходимо хранить курсы обмена валют;
// Первым делом необходимо запросить у пользователя название валюты, которую он хочет обменять.
// Далее пользователь должен иметь возможность ввести сумму, которую он хочет обменять;
// Далее обменник должен ввести пользователю информацию об операции. А именно, показать сумму, которую получит клиент обратной валюте в случае обмена;
// Далее пользователь должен иметь возможность согласиться или отказаться от обмена.
// Если пользователь соглашается с обменом, то выводим на экран сообщение “Мы поменяли {кол-во денег, которые передал клиент} {валюта, которую передал пользователь} на {кол-во денег, которые вернул обменник} {валюта, которую вернул обменник}.
//  В противном случае выводим случае выводим сообщение “Увидимся в следующий раз”



function exchanger() {
    currencyType = prompt("Какую валюту вы хотите обменять - USD или RUB?", "USD");

    if (currencyType == "usd" || currencyType == "USD") {
        reverseType = "RUB";
        sumOfCash = prompt("Введите сумму, необходимую для обмена", "100");
        operationInfo = (sumOfCash * $_RATE).toFixed(2);
        alert(`Вы получите ${operationInfo} RUB`);
        agreement = confirm(`Вы согласны обменять ${sumOfCash} USD на ${operationInfo} RUB?`);
    }
    else if (currencyType == "rub" || currencyType == "RUB") {
        reverseType = "USD";
        sumOfCash = prompt("Введите сумму, необходимую для обмена", "100");
        operationInfo = (sumOfCash * RUB_RATE).toFixed(2);
        alert(`Вы получите ${operationInfo} USD`);
        agreement = confirm(`Вы согласны обменять ${sumOfCash} RUB на ${operationInfo} USD?`);
    }
    else {
        alert("Вы неверно ввели валюту! Нужно ввести USD или RUB");
        exchanger();
    }
    result();
}

function result() {
    if (agreement == true) {
        alert(`Мы поменяли ${sumOfCash} ${currencyType} на ${operationInfo} ${reverseType}`);
        anotherOneChange();
    }
    else {
        alert("Увидимся в следующий раз!")
    }
}

function anotherOneChange() {
    anotherOne = confirm("Хотите выполнить еще одну операцию?");
    if (anotherOne == true) {
        exchanger();
    }
    else {
        alert("До следующего раза!")
    }
}



const $_RATE = 74.93;
RUB_RATE = 0.013;
let operationInfo;
let agreement;
let sumOfCash;
let currencyType;
let anotherOne;

exchanger();





