let box = document.querySelector("#no");

let containerWidth = window.innerWidth;
let containerHeight = window.innerHeight;

box.addEventListener("mouseenter", () => {
  let randomX = Math.random() * (containerWidth - box.offsetWidth);
  let randomY = Math.random() * (containerHeight - box.offsetHeight);
  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;
});
document.querySelector("#yes").addEventListener("click", () => {
  // Show alert message
  alert("Now You Are My Girlfriend 💖");

  // Show and play the lottie animation
  const animation = document.getElementById("loveAnimation");
  animation.style.display = "block";
  animation.play();
});
