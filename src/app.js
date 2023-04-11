/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const btn = document.querySelector(".btn");
const excuse = document.querySelector("#excuse");
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

console.log(btn);
console.log(excuse);

function generateExcuse() {
  let numeroWho = Math.floor(Math.random() * 4);
  let numeroAction = Math.floor(Math.random() * 4);
  let numeroWhat = Math.floor(Math.random() * 3);
  let numeroWhen = Math.floor(Math.random() * 4);

  excuse.innerText = " ";
  excuse.innerText =
    who[numeroWho] +
    " " +
    action[numeroAction] +
    " " +
    what[numeroWhat] +
    " " +
    when[numeroWhen];
}

btn.onclick = generateExcuse;
