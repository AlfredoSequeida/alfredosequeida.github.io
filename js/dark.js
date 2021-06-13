const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

const darkButtonMobile = document.getElementById("dark-mobile");
const lightButtonMobile = document.getElementById("light-mobile");

let theme = localStorage.getItem("theme");

const toggleTheme = () => {
  if (theme == "dark") {
    darkButton.style.display = "none";
    lightButton.style.display = "block";

    darkButtonMobile.style.display = "none";
    lightButtonMobile.style.display = "block";
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    darkButton.style.display = "block";
    lightButton.style.display = "none";

    darkButtonMobile.style.display = "block";
    lightButtonMobile.style.display = "none";
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
};

lightButton.addEventListener("click", () => {
  theme = "light";
  toggleTheme();
});

darkButton.addEventListener("click", () => {
  theme = "dark";
  toggleTheme();
});

lightButtonMobile.addEventListener("click", () => {
  theme = "light";
  toggleTheme();
});

darkButtonMobile.addEventListener("click", () => {
  theme = "dark";
  toggleTheme();
});

toggleTheme();
