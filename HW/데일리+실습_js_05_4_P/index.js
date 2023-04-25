// 01
const searchBtn = document.querySelector(".search-box__button");
const result = document.querySelector(".search-result");
let prekeyword = "";
// 02
searchBtn.addEventListener(
  "click",
  function fetchAlbums(event, page = 1, limit = 10) {
    // 01 시점의 문제... 클릭을 눌렀을 때 이미 벨류값이 와있으니까 그때 받아야됨
    // 이전에 변수값을 지정해주면 빈칸이 온다

    const search_input = document.querySelector(".search-box__input");
    keyword = search_input.value;

    // 초기화 해주기
    if (prekeyword !== keyword) {
      result.innerHTML = "";
      prekeyword = keyword;
    }

    musicURL = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${keyword}&api_key=b5890aead942a77fe812b6db5729a2d6&format=json`;

    //03
    // event.preventDefault();

    axios({
      method: "get",
      url: musicURL,
    })
      .then(function (response) {
        const albums = response.data["results"]["albummatches"]["album"];
        console.log(albums);

        albums.forEach(function (album) {
          const div1 = document.createElement("div");
          div1.classList.add("search-result__card");

          const img = document.createElement("img");
          if (album["image"][1]["#text"]) {
            img.src = album["image"][1]["#text"];
          }

          const div2 = document.createElement("div");
          div2.classList.add("search-result__text");

          const h2 = document.createElement("h2");
          h2.innerText = album["artist"];

          const p = document.createElement("p");
          p.innerText = album["name"];

          div2.append(h2, p);
          div1.append(img, div2);
          result.appendChild(div1);
        });
      })
      .catch(function (response) {
        alert("잠시 후 다시 시도해주세요");
      });
  }
);
