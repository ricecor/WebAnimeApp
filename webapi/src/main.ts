import axios, { AxiosResponse } from "axios";
import { RandomAnime, Anime } from "./datatypes";
const limitInput: Element | null = document.getElementById("input1");
const fetchBtn = document.getElementById("btn1");
const myTable = document.getElementById("mars");

// Define a click listener on the button
fetchBtn?.addEventListener("click", () => {
  removeOldData();
  fetchNewData();
});

function removeOldData() {
  const rows: NodeListOf<HTMLTableRowElement> =
    document.querySelectorAll(".fromAPI");

  for (let k = 0; k < rows.length; k++) {
    myTable?.removeChild(rows[k]);
  }
}

function fetchNewData() {
  const fetchLimit = (limitInput as HTMLInputElement)?.value ?? 10;
  axios
    .request({
      method: "GET",
      url: "https://anime-facts-rest-api.herokuapp.com/api/v1",
      params: { results: fetchLimit},
    })
    //randomUserResp
    .then((resp: AxiosResponse) => resp.data)
    .then((ra:RandomAnime) => {
        for(let k = 0; k < ra.results.length; k++){
          const a: Anime = ra.results[k];
          const aRow = document.createElement("tr");
          aRow.setAttribute("id", "fromAPI");
          myTable?.appendChild(aRow);

          const aniID = document.createElement("td");
          aniID.innerText = `${a.anime_id}`;
          aRow.appendChild(aniID);

          const aniName = document.createElement("td");
          aniName.innerText = `${a.anime_name}`;
          aRow.appendChild(aniName);

          const aniPic = document.createElement("td");
          aRow.appendChild(aniPic);
          const image = document.createElement("img");
          image.setAttribute("src", a.anime_img);
          aniPic.appendChild(image);
        }
      });

    

}

fetchNewData();
