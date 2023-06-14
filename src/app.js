/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
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

  let newwho = who[Math.floor(Math.random() * who.length)];
  let newaction = action[Math.floor(Math.random() * action.length)];
  let newwhat = what[Math.floor(Math.random() * what.length)];
  let newwhen = when[Math.floor(Math.random() * when.length)];

  let final = newwho + " " + newaction + " " + newwhat + " " + newwhen;

  let finalparahtml = document.querySelector("#excuse");
  finalparahtml.innerHTML = final;
};
