"use strict";

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll(".heart"),
      wrapper = document.querySelector(".wrapper"),
      oneHeart = document.querySelector(".heart");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

hearts.forEach(item => {
 item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
// const text = document.createTextNode("Тут был я");

div.classList.add("black");

// wrapper.append(div);   //добавление элемента вконец блока
// wrapper.prepend(div);  //добавление элемента вначало блока
// hearts[0].before(div); //добавление элемента до другого элемента
// hearts[0].after(div);  //добавление элемента после другого элемента

// circles[0].remove();  //удаление элемента 

// hearts[0].replaceWith(circles[0]);  //перемещение элемента в другой блок

div.innerHTML = "<h1>Hello World</h1>"; //вставка html-кода
// div.textContent = "Hello World"; //добавление текста