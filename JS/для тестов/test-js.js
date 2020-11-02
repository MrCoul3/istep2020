let ul = document.createElement("ul");
document.body.append(ul);


let title = document.createElement("h1");
title.innerHTML = "Список дел :";
ul.before(title);

while (true){
    let a = prompt("список дел","1");

    if (!a) break;

    let li = document.createElement("li");
    li.textContent = a;
    ul.append(li);
    
}