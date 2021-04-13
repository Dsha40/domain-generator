/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "Us"];
let adj = ["great", "big", "last", "wonder", "geeks"];
let noun = ["jogger", "racoon", "of", "woman", "game"];
let terminal = [".us", ".com", ".gov", ".edu"];
let domain = [];
let final = "";

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < terminal.length; l++) {
        domain.push(`${pronoun[i]}${adj[j]}${noun[k]}${terminal[l]}`);
      }
    }
  }
}

let startli = [];

window.onload = function() {
  //write your code here
  domain.forEach(domain => console.log(domain));
  startli = domain.map(domain => `<li class="p-3">${domain}</li>`);
  final += startli.join(" ");
  document.querySelector("#liDom").innerHTML = final;
};
