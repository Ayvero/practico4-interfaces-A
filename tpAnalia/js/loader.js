var percent = document.querySelector(".percent");
var count = 0;
var loading = setInterval(animate, 100);
function animate() {
  if (count == 100) {
    clearInterval(loading);
  } else {
    count = count + 1;
    percent.textContent = count + "%";
  }
}
