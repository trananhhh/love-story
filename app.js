const yourDate = new Date("2020-10-08T00:00:00"),
  music = ["ido", "noinaycoanh", "nguoiamphu"];
const yourrDate = new Date("2021-10-8T00:00:00");

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var rootTime = document.querySelector("time");

    document.querySelector("anni").textContent = `${
      yourDate.getDate() > 9 ? yourDate.getDate() : "0" + yourDate.getDate()
    }-${
      yourDate.getMonth() > 8
        ? yourDate.getMonth() + 1
        : "0" + (yourDate.getMonth() + 1)
    }-${yourDate.getFullYear()}`;

    document.querySelector("date").textContent =
      Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) +
      " DAYS";

    function olock() {
      var today = new Date(),
        hrs = Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60) % 24,
        min = Math.floor(Math.floor((today - yourDate) / 1000) / 60) % 60,
        sec = Math.floor((today - yourDate) / 1000) % 60;
      rootTime.textContent = `${hrs > 9 ? hrs : "0" + hrs}:${
        min > 9 ? min : "0" + min
      }:${sec > 9 ? sec : "0" + sec}`;
    }
    olock();
    // var wavesurfer = WaveSurfer.create({
    //   container: "#waveform",
    //   waveColor: "violet",
    //   progressColor: "aqua",
    // });

    // wavesurfer.load(
    //   "https://soundcloud.com/b-i-linh-7/du-cho-mai-ve-sau-demo?si=1476eae69dcf4d27b5fa695beb033b9d"
    // );
    var timer = setInterval(function () {
      console.log(new Date() - yourrDate);

      if (new Date() - yourrDate >= 0)
        window.location.href =
          "http://localhost:8080/demngayyeu/lovestory.html";
      olock();
    }, 1000);
    // document
    //   .querySelector("audio")
    //   .setAttribute(
    //     "src",
    //     `music/${music[Math.floor(Math.random() * music.length)]}.mp3`
    //   );

    document
      .getElementsByTagName("body")[0]
      .insertAdjacentHTML("beforeend", "<div id='mask'></div>");
  },
  false
);
