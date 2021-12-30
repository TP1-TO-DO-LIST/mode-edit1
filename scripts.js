

function main() {
  // theme-switcher
  document
    .getElementById("theme-switcher")
    .addEventListener("click", function () {
      document.querySelector("body").classList.toggle("light");
      const themeImg = this.children[0];
      themeImg.setAttribute(
        "src",
        themeImg.getAttribute("src") === "icon-sun.svg"
          ? "icon-moon.svg"
          : "icon-sun.svg"
      );
    });

}
