document.getElementById("btnStart").addEventListener("click", fillProgressBar.bind(10));

// Javascript
function fillProgressBar(sec) {
  let target = document.querySelector(".bar");
  let currentPercent = 0;
  let interval = setInterval(() => {
    target.style.width = currentPercent + '%';
    currentPercent++;
    if(currentPercent >= 100) {
      clearInterval(interval);
    }
  }, (sec * 1000)/ 1)
}

// CSS
function fillProgressBar2(sec) {
  let target = document.querySelector(".bar");
  target.style.transition = `${sec} s linear width`;
  target.style.width = '100%';
}