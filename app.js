let storage = window.localStorage;
let divResult = document.getElementById("result");

storage.setItem("police","18");
storage.setItem("theme","material");
storage.setItem("color","black");

function setInnerHtml(theme, color, police){
    divResult.innerHTML = "theme " + theme + " color " + color + " police " + police;
}

setInnerHtml(storage.getItem("theme"), storage.getItem("color"), storage.getItem("police"));