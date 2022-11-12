function ex1() {
  var sum = 0;
  for (var i = 0; sum < 10000; i++) {
    sum = i + sum;
  }
  document.getElementById("ex1-result").innerHTML =
    "Số nguyên dương nhỏ nhất: " + i;
}
ex1();

function ex2Plus1() {
  var x = document.getElementById("ex2-input-number-x").value * 1;
  var n = document.getElementById("ex2-input-number-n").value * 1;
  var sum = 0;
  for (i = 1; i <= n; i++) {
    sum = sum + Math.pow(x, i);
  }
  document.getElementById("ex2-result").innerHTML = sum;
  document.getElementById("ex2-input-number-x").value = "";
  document.getElementById("ex2-input-number-n").value = "";
}

const ex2Plus2Plus1 = (k) => {
  var x = document.getElementById("ex2-input-number-x").value * 1;
  var result = 0;
  if (k <= 0) {
    return 0;
  }
  result = result + Math.pow(x, k);
  return result + ex2Plus2Plus1(k - 1);
}

function ex2Plus2() {
  var n = document.getElementById("ex2-input-number-n").value * 1;
  document.getElementById("ex2-result").innerHTML = ex2Plus2Plus1(n);
  document.getElementById("ex2-input-number-x").value = "";
  document.getElementById("ex2-input-number-n").value = "";
}

function ex3() {
  var n = document.getElementById("ex3-input-number-n").value;
  var sum = 1;
  for (i = 1; i <= n; i++) {
    sum = sum * i;
  }
  document.getElementById("ex3-result").innerHTML = sum;
}

function ex4() {
  for (i = 1; i <= 10; i++) {
    createDiv(i);
  }
}

function createDiv(count) {
  var div = document.createElement("div");
  div.style.width = "100%";
  div.style.height = "30px";
  div.style.color = "white";
  div.style.margin = "0 auto";
  div.style.textAlign = "left";
  div.style.paddingLeft = "10px";
  div.style.paddingTop = "5px";
  div.style.boxSizing = "border-box";

  div.style.display = "block";
  if (i % 2 === 1) {
    div.style.background = "blue";
    div.innerHTML = "div lẻ " + i;
  } else {
    div.style.background = "red";
    div.innerHTML = "div chẵn " + i;
  }

  document.getElementById("ex4-result").appendChild(div);
}
