toggleMenu = function () {
  const header = document.getElementsByTagName('header')[0];
  header.classList.toggle("closed");
};

document.getElementById("menuButton").addEventListener("click", function (e) {
  e.preventDefault();
  toggleMenu();
});

toggleMenu();
