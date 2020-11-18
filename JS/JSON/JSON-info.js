/* let json = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
  console.log(json.active);

 console.log(json["active"]);

JSON.stringify для преобразования объектов в JSON.
JSON.parse для преобразования JSON обратно в объект.

Использование Fetch - инструмент для запросов 

Базовый запрос на получение данных действительно прост в настройке. Взгляните на следующий код: */

fetch('http://194.58.122.219/test/weather-api-test/?lat=54&lon=36')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let deg = data.data.fact.temp;
    console.log(deg)
  });