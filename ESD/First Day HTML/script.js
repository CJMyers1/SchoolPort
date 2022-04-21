console.log("3D Printing");

const btn = document.querySelector("button");

if (btn) {
  btn.onclick = function () {
    btn.classList.toggle(dipped);
  };
}
