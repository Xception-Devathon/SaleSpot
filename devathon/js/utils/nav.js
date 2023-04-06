let open = false;

function toggleNav() {
  console.log("toggleNav");
  if (open) {
    document.getElementById("bars").classList.remove("open");
      document.getElementById("main-nav").style.opacity = 0;
      document.getElementById("main-nav").style.transform="translateX(-100%)";
  } else {
    document.getElementById("bars").classList.add("open");
      document.getElementById("main-nav").style.opacity = 1;
        document.getElementById("main-nav").style.transform="translateX(0%)";
  }
  open = !open;
}
