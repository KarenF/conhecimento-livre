function carousel() {
  document.getElementById("clickMe").onclick = function () {

    let list = document.querySelectorAll("li");

    for (let i = 0; i < 3; ++i) {
      list[i].classList.toggle('carousel-invisible')
      list[i].classList.toggle('carousel-visible')
    }
  }
}
