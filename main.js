let barsIcon = document.querySelector("#bars");
let dropDown = document.querySelector(".drop-down");
let moon = document.querySelector("#moon");
let sun = document.querySelector("#sun");
let dropDownToggle = false;

barsIcon.addEventListener("click", () => {
  dropDownToggle = !dropDownToggle;
  if (dropDownToggle) {
    dropDown.style.display = "block";
  } else {
    dropDown.style.display = "none";
  }
});

dropDown.addEventListener("click", () => {
  dropDownToggle = false;
  dropDown.style.display = "none";
});

window.onclick = (event) => {
  if (!event.target.matches(".drop-down") && !event.target.matches("#bars")) {
    dropDownToggle = false;
    dropDown.style.display = "none";
  }
};

moon.addEventListener("click", () => {
  moon.style.display = "none";
  sun.style.display = "block";
  document.documentElement.style.setProperty("--main-bac-color", "#1b1431");
  document.documentElement.style.setProperty("--main-font-color", "#fff");
  document.documentElement.style.setProperty(
    "--main-dropdown-bac-color",
    "#291b56"
  );
  document.documentElement.style.setProperty("--main-shadows", "#00000040");
});

sun.addEventListener("click", () => {
  sun.style.display = "none";
  moon.style.display = "block";
  document.documentElement.style.setProperty("--main-bac-color", "#fff");
  document.documentElement.style.setProperty("--main-font-color", "#222");
  document.documentElement.style.setProperty(
    "--main-dropdown-bac-color",
    "#fff"
  );
  document.documentElement.style.setProperty("--main-shadows", "#00000010");
});

function updateStyleDropDown() {
  if (window.innerWidth >= 1000) {
    dropDown.style.display = "none";
    dropDownToggle = false;
  }
}

window.addEventListener("resize", updateStyleDropDown);
