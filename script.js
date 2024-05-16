var body = document.getElementsByTagName("body")[0];
var select = document.getElementById("noOfGradient");
var style = document.getElementById("gradientStyle");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById("color3");
var lable1 = document.getElementById("lable1");
var lable2 = document.getElementById("lable2");
var lable3 = document.getElementById("lable3");
var clr1 = document.querySelector(".clr1");
var clr2 = document.querySelector(".clr2");
var clr3 = document.querySelector(".clr3");

function selectGradientNo() {
  switch (select.value) {
    case "1":
      oneGradient();
      break;

    case "2":
      twoGradient();
      break;

    case "3":
      threeGradient();
      break;
  }
}

function selectGradientStyle() {
  if (select.value === "1") {
    oneColor();
  } else if (select.value === "2") {
    twoColor();
  } else if (select.value === "3") {
    threeColor();
  }
}
function selectColor() {
  selectGradientStyle();
  clr1.textContent = `${color1.value}`;
  clr2.textContent = `${color2.value}`;
  clr3.textContent = `${color3.value}`;
  clr1.style.backgroundColor = `${color1.value}`;
  clr2.style.backgroundColor = `${color2.value}`;
  clr3.style.backgroundColor = `${color3.value}`;
}
function oneGradient() {
  lable1.style.display = "flex";
  lable2.style.display = "none";
  lable3.style.display = "none";
  style.style.display = "none";
  clr1.style.display = "inline";
  clr2.style.display = "none";
  clr3.style.display = "none";
  oneColor();
}
function oneColor() {
  body.style.background = `${color1.value}`;
}
function twoGradient() {
  lable1.style.display = "flex";
  lable2.style.display = "flex";
  lable3.style.display = "none";
  style.style.display = "flex";
  clr1.style.display = "inline";
  clr2.style.display = "inline";
  clr3.style.display = "none";
  twoColor();
}
function twoColor() {
  if (style.value === "linear-right") {
    body.style.background = `linear-gradient(to right,${color1.value},${color2.value}`;
  }
  if (style.value === "linear-bottom") {
    body.style.background = `linear-gradient(to bottom,${color1.value},${color2.value}`;
  }
  if (style.value === "Radial") {
    body.style.background = `radial-gradient(${color1.value},${color2.value}`;
  }
}

function threeGradient() {
  lable1.style.display = "flex";
  lable2.style.display = "flex";
  lable3.style.display = "flex";
  style.style.display = "flex";
  clr1.style.display = "inline";
  clr2.style.display = "inline";
  clr3.style.display = "inline";
  threeColor();
}
function threeColor() {
  if (style.value === "linear-right") {
    body.style.background = `linear-gradient(to right,${color1.value},${color2.value},${color3.value}`;
  }
  if (style.value === "linear-bottom") {
    body.style.background = `linear-gradient(to bottom,${color1.value},${color2.value},${color3.value}`;
  }
  if (style.value === "Radial") {
    body.style.background = `radial-gradient(${color1.value},${color2.value},${color3.value}`;
  }
}

style.addEventListener("input", selectGradientStyle);
select.addEventListener("input", selectGradientNo);

color1.addEventListener("input", selectColor);
color2.addEventListener("input", selectColor);
color3.addEventListener("input", selectColor);
