document.addEventListener('DOMContentLoaded', function(){
  let stars = document.querySelectorAll(".star");
  stars.forEach(function(star){
    star.addEventListener("click", setRating);
  });

  let currentRating = parseInt(document.querySelector(".stars").getAttribute("data-rating"));
  let target = stars[currentRating - 1];

  target.click();
});

function setRating(e) {
  let span = e.target;
  let stars = document.querySelectorAll(".star");
  let newRating = 0;
  let match = false;

  stars.forEach(function(star, index){
    if (match) {
      star.classList.remove("rated");
    }
    else {
      star.classList.add("rated");
    }

    if (star === span) {
      match = true;
      newRating = index + 1;
    }
  });

  document.querySelector(".stars").setAttribute("data-rating", newRating);
}