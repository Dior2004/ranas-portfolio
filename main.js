let barsIcon = document.querySelector("#bars");
let dropDown = document.querySelector(".drop-down");
let moon = document.querySelector("#moon");
let sun = document.querySelector("#sun");
let workSide = document.querySelector("#workSide");
let eduSide = document.querySelector("#eduSide");
let experience = document.querySelector("#experience");
let education = document.querySelector("#education");
let dropDownToggle = false;

let workExperience = [
  {
    id: 1,
    date: "2022/10 - Present",
    title: "Sous Chef",
    text: "St. Regis Hotel (<strong>Roberto's</strong> Italian Restaurant), Marsa Arabia, Doha Qatar",
  },
  {
    id: 2,
    date: "2020/01 - 2022/09",
    title: "Sous Chef",
    text: "Virgin Voyage Cruise, (<strong>Razzle - Dazzle</strong> international cuisine restaurant), Miami, Fl",
  },
  {
    id: 3,
    date: "2018/01 - 2019/12",
    title: "Sous Chef <br /> (acting Head Chef)",
    text: "Peregrines Food Jubilee Hills, (Indian cuisine restaurant), Hyderabad India, SSK",
  },
  {
    id: 4,
    date: "2016/10 - 2017/12",
    title: "Chef de Partie",
    text: "Waldorf Astoria, Dubai Palm Jumeriah, Hilton Hotels (Italian cuisine restaurant)",
  },
  {
    id: 5,
    date: "2015/04 - 2016/09",
    title: "Demi Chef De Partie",
    text: "Galaxy Hotel, Galaxy Entertainment Group, Macau, SAR (<strong>Otto E Mezzo Bombana</strong> Michelin Star Italian cuisine restaurant)",
  },
  {
    id: 6,
    date: "2014/03 - 2015/03",
    title: "Commis Chef",
    text: "Grosvenor House, A Luxury Collection Hotel, Dubai, UAE ( <br /> <strong>In Rhodes W 1</strong> - a modern British Cuisine restaurant by Michelin star chef Gary Rhodes)",
  },
  {
    id: 7,
    date: "2012/10 - 2014/02",
    title: "Commis Chef",
    text: "One & Only Royal Mirage, Dubai (<strong>Nina</strong> - a modern Indian cuisine restaurant)",
  },
  {
    id: 8,
    date: "2012/01 - 2012/10",
    title: "Commis Chef",
    text: "<strong>Double Tree</strong> by Hilton (Italian cuisine restaurant), Gurgaon New Delhi",
  },
  {
    id: 9,
    date: "2010/12 - 2011/12",
    title: "Commis Chef",
    text: "<strong>Devyani Food Street</strong> Pvt. Ltd, IGI Airport, Delhi",
  },
];

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

workSide.addEventListener("click", () => {
  if (workSide.className !== "activeSide") {
    workSide.className = "activeSide";
    eduSide.className = "";
    experience.style.display = "flex";
    education.style.display = "none";
  }
});

eduSide.addEventListener("click", () => {
  if (eduSide.className !== "activeSide") {
    eduSide.className = "activeSide";
    workSide.className = "";
    experience.style.display = "none";
    education.style.display = "flex";
  }
});

workExperience.map((i) => {
  // let paragraph = document.createElement("p");
  // paragraph.innerHTML = i.date;
  // experience.appendChild(paragraph);

  if (i.id % 2 == 0) {
    let boxEven = `
    <div class="box even">
      <p>${i.date}</p>
      <h3>${i.title}</h3>
      <p>
        ${i.text}
      </p>
    </div>
    `;
    document
      .getElementById("experience")
      .insertAdjacentHTML("beforeend", boxEven);
  } else {
    let boxOdd = `
    <div class="box odd">
      <p>${i.date}</p>
      <h3>${i.title}</h3>
      <p>
        ${i.text}
      </p>
    </div>
    `;
    document
      .getElementById("experience")
      .insertAdjacentHTML("beforeend", boxOdd);
  }
});
