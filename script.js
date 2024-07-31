document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".slider").style.setProperty("--rotate-x", "0");
  let rotateXValue = 0;

  document.addEventListener("keydown", function (e) {
    // console.log(e);
    if (e.key === "ArrowUp") {
      rotateXValue -= 1;
    } else if (e.key === "ArrowDown") {
      rotateXValue += 1;
    }

    document
      .querySelector(".slider")
      .style.setProperty("--rotate-x", `${rotateXValue}deg`);
  });

  const up = document.querySelector(".up");
  const down = document.querySelector(".down");

  up.addEventListener("click", function (e) {
    console.log("Up button clicked");
    rotateXValue -= 1;

    document
      .querySelector(".slider")
      .style.setProperty("--rotate-x", `${rotateXValue}deg`);
  });

  down.addEventListener("click", function (e) {
    console.log("down button clicked");
    rotateXValue += 1;

    document
      .querySelector(".slider")
      .style.setProperty("--rotate-x", `${rotateXValue}deg`);
  });
});

// window.addEventListener("load", function () {
//   setTimeout(function () {
//     let audio = document.getElementById("background-audio");
//     audio.play();
//   }, 1000);
// });

document.getElementById("play-button").addEventListener("click", function () {
  let play = document.querySelector(".play");
  let audio = document.getElementById("background-audio");
  audio.play();
  play.style.display = "none";
});
