// Необходимо реализовать класс для пользователя банковской системы.
// Класс должен запрашивать и хранить следующие свойста:
// - имя (длина имени не менее 4 символов)
// - фамилия
// - счет клиента (только цифры >= 0)

// Решение 

class Client {
  constructor(name, lastName, bill) {
    this.clientName = name;
    this.clientLastName = lastName;
    this.bill = bill;
  }
  set clientName(value) {
    if (value.length < 4) {
     console.log("1. Имя меньше 4 символов");
    } else {
      console.log("1. Ошибок нет");
    }
    this._clientName = value;
  }
  get clientName() {
    return this._clientName;
  }
  set bill(value) {
    if (value < 0) {
      console.log("2. Счет меньше нуля");
    } else {
      console.log("2. Ошибок нет");
    }
    this._bill = value;
  }
  get bill() {
    return this._bill;
  }
}

let arClients = [
  {name: 'Ivan', lastName: 'Shishkin', bill: 10000},
  {name: 'Ivan', lastName: 'Shishkin', bill: 0},
  {name: '    ', lastName: 'Shishkin', bill: -10000},
  {name: 123, lastName: 'Shishkin', bill: 10000},
  {name: 'Ivan', lastName: 'Shishkin', bill: 0.2},
  {name: 'Yo', lastName: 'Shishkin', bill: -0.6},
  {name: '\t', lastName: 'Shishkin', bill: 10000},
];


let base = ["human1", "human2", "human3", "human4", "human5", "human6", "human7"];

for (let i = 0; i < arClients.length; i++) {
  console.log(base[i] + " errors:");
  base[i] = new Client(arClients[i].name, arClients[i].lastName, arClients[i].bill)
  console.log(base[i]);
}
