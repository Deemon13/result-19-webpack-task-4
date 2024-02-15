import "./index.css";
import MY_IMAGE from "./assets/Learn-To-Program-JavaScript-In-10-Easy-Steps.jpg";

const container = document.createElement("div");
const img = document.createElement("img");
const title = document.createElement("h1");

container.className = "container";
img.src = MY_IMAGE;
img.alt = "JS";
img.className = "img-js";
title.innerText = "I love JavaScript";

container.append(title);
container.append(img);
document.body.append(container);

console.log("Hello World!");
