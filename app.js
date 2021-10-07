const yourDate = new Date("2021-10-08T00:00:00"),
  music = ["ido", "noinaycoanh", "nguoiamphu"];
const yourrDate = new Date("2021-10-08T00:00:00");
// const yourrDate = new Date("2021-10-07T13:32:20");

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var rootTime = document.querySelector("time");

    document.querySelector("anni").textContent = `08/10/2020`;

    document.querySelector("date").textContent =
      Math.floor(Math.floor((yourDate - new Date()) / 1000) / 60 / 60 / 24) + " DAYS";

    function olock() {
      var today = new Date(),
        hrs = Math.floor(Math.floor((yourDate - today) / 1000) / 60 / 60) % 24,
        min = Math.floor(Math.floor((yourDate - today) / 1000) / 60) % 60,
        sec = Math.floor((yourDate - today) / 1000) % 60;
        rootTime.textContent = `${hrs > 9 ? hrs : "0" + hrs}:${
          min > 9 ? min : "0" + min
        }:${sec > 9 ? sec : "0" + sec}`;
    }

    olock();

    var timer = setInterval(function () {
      if (new Date() - yourrDate >= 0)
        window.location.href =
          "http://localhost:8080/demngayyeu/lovestory.html";
      olock();
    }, 1000);

    document
      .getElementsByTagName("body")[0]
      .insertAdjacentHTML("beforeend", "<div id='mask'></div>");
  },
  false
);
