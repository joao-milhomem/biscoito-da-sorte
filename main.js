const initialScreen = document.querySelector("#initial-screen");
const quoteScreen = document.querySelector("#quote-screen");
const quoteList = [
  "A sorte favorece os ousados.",
  "Seu sucesso está logo ali, continue persistindo.",
  "Acredite em si mesmo e os outros também acreditarão.",
  "Boas notícias estão a caminho.",
  "A vida é uma jornada, aproveite-a ao máximo.",
  "Sorria para o mundo, e o mundo sorrirá de volta para você.",
  "Grandes coisas estão por vir, não desista.",
  "Aprenda com seus erros, são eles que o tornam mais forte.",
  "A felicidade está dentro de você, encontre-a.",
  "A cada novo dia, novas oportunidades surgem.",
];

const randomQuote = () => quoteList[Math.floor(Math.random() * 9)];

function toggleScreen() {
  initialScreen.classList.toggle("hide");
  quoteScreen.classList.toggle("hide");

  if (quoteScreen.classList.contains("hide")) {
    randomQuote();
  }

  quoteScreen.querySelector("p").innerText = randomQuote();
}

initialScreen.querySelector("button").addEventListener("click", toggleScreen);
quoteScreen.querySelector("button").addEventListener("click", toggleScreen);
