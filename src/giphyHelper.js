import { renderGif } from "@giphy/js-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import "dotenv/config";

const gf = new GiphyFetch(process.env["GIPHY_WEB_SDK_KEY"]);

export async function getGif(searchTerm) {
  const { data: gifs } = await gf.random({
    tag: searchTerm,
    type: "gifs",
    limit: 100,
    offset: Math.floor(Math.random() * 100),
  });
  console.dir(gifs);
  return gifs;
}

export const displayGif = async (mountNode, searchTerm) => {
  // render a single gif
  const gif1 = await getGif(searchTerm);
  mountNode.innerHtml = "";
  renderGif({ gif: gif1, width: 300 }, mountNode);
};
