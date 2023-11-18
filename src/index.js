import { displayGif } from "./giphyHelper";

export function handleSubmit(event) {
  console.log("handleSubmit");
  event.preventDefault();
  displayGifWithSearchTerm();
}

async function displayGifWithSearchTerm() {
  const feeling = document.getElementById("input-feel").value;
  const gifDisplayArea = document.getElementById("gif-display-area");
  await displayGif(gifDisplayArea, feeling);
}
