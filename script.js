// jshint esversion:7
alert("Use w,a,s,d keys to move the car");

document.addEventListener('keydown', function(event) {
  var keyName = event.key;
  move(keyName);
});

function move(key) {
  // console.log(key);
  switch (key) {
    case "w" || "W":
      shiftVerticle(true);
      break;
    case "s" || "S":
      shiftVerticle(false);
      break;
    case "a" || "A":
      shiftHorizontal(true);
      break;
    case "d" || "D":
      shiftHorizontal(false);
      break;
    default:

  }
}

let verticleValue = parseInt(window.getComputedStyle(document.querySelector('.object')).top);
let horizontalValue = parseInt(window.getComputedStyle(document.querySelector('.object')).left);

function shiftVerticle(state) {
  if (state) {
    verticleValue -= 15;
  } else {
    verticleValue += 15;
  }
  // console.log(verticleValue);
  document.querySelector(".object").style.top = `${verticleValue}px`;
}

function shiftHorizontal(state) {
  if (state) {
    horizontalValue -= 15;
  } else {
    horizontalValue += 15;
  }
  // console.log(horizontalValue);
  document.querySelector(".object").style.left = `${horizontalValue}px`;
}
