// 01
const search_input = document.querySelector(".search-box__input");
const searchBtn = document.querySelector(".search-box__button");

let keyword = 0;

search_input.addEventListener("input", function (event) {
  keyword = event.target.value;
  // console.log(keyword);
});

// 02
searchBtn.addEventListener(
  "click",
  function fetchAlbums(event, page = 1, limit = 10) {
    musicURL = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${keyword}&api_key=b5890aead942a77fe812b6db5729a2d6&format=json`;

    //03

    const div1 = document.createElement("div");
    div1.classList.add("search-result__card");
    const img = document.createElement("img");
    img.src = "앨범_이미지_주소";

    const div2 = document.createElement("div");
    div2.classList.add("search-result__text");

    const h2 = document.createElement("h2");

    const p = document.createElement("p");

    axios({
      method: "get",
      url: musicURL,
    })
      .then(function (response) {
        event.preventDefault();
        const albums = response.data["results"]["albummatches"]["album"];
        console.log(albums);

        albums.forEach(function (album) {
          img.src = album["image"][1]["text"];

          h2.innerText = album["artist"];

          p.innerText = album["name"];
          div2.append(h2, p);
          div1.append(img, div2);
          document.body.appendChild(div1);
        });
      })
      .catch(function (response) {
        alert("잠시 후 다시 시도해주세요");
      });
  }
);
