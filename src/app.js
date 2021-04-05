/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let randomNumber = Math.random() * 10;
  document.querySelector("#theExcuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
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

  let goIndexWho = Math.floor(Math.random() * who.length);
  let goIndexAction = Math.floor(Math.random() * action.length);
  let goIndexWhat = Math.floor(Math.random() * what.length);
  let goIndexWhen = Math.floor(Math.random() * when.length);

  return (
    who[goIndexWho] +
    " " +
    action[goIndexAction] +
    " " +
    what[goIndexWhat] +
    " " +
    when[goIndexWhen]
  );
};
