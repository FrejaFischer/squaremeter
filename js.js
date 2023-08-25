"use strict";

// const arealet = recCalc(50, 2);

// console.log(arealet);

document.querySelector("button").addEventListener("click", run);

function run() {
  const bredNumb = document.querySelector("#bredNumb").value;
  const lenNumb = document.querySelector("#lenNumb").value;
  console.log(bredNumb + lenNumb);

  const newbredNumb = parseInt(bredNumb);
  const newlenNumb = parseInt(lenNumb);
  console.log(newlenNumb);
  console.log(newbredNumb);
  // recCalc(newlenNumb, newbredNumb);
  const finalArea = recCalc(newlenNumb, newbredNumb);

  document.querySelector("#area").textContent = finalArea;
}

function recCalc(length, width) {
  const result = length * width;
  return result;
}
