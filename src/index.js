function generatePoem(event) {
    event.preventDefault();


new Typewriter("poem", {
  strings: "Sephaphathi se boela gae",
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatorPoem);