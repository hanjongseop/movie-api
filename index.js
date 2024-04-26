const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg3ZTZkMDRlNzg1YjBiOWRmNWZiOTZlNjAyNzFhZSIsInN1YiI6IjY2MjY3ODIxMmRkYTg5MDE4N2UzY2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m0VR-0DBlwf_cbftDltXdOACEDmLpdQ_8R3E6kmLDTg",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.results);
    //response.results를 배열 작업
    //moviecard라는 변수와 =  li요소 추가
    //moviecard class 이름movie-card로 생성
    //id "api" 찾아서 moviecard요소 추가
    response.results.forEach((element) => {
      let moviecard = document.createElement("li");
      moviecard.className = "movie-card";
      document.getElementById("api").appendChild(moviecard);

      //post라는 변수와 =  lmg요소 추가
      //post.src = api이미지 받아오는주소 + api poster_path 값
      //moviecard class 이름movie-card로 추가
      //부모객체의(moviecard)에 post를추가
      let post = document.createElement("img");
      post.src = "https://image.tmdb.org/t/p/w185" + element.poster_path;
      moviecard.appendChild(post);

      //post클릭시  alert ""발생
      //post class 이름은 "movie-post"로 추가
      post.onclick = function () {
        alert("id:" + element.id);
        post.className = "movie-post";
      };

      //titleli라는 변수와 =  div 요소 추가
      //titleli 변수에 텍스트추가 = api element.title 값
      //부모객체(moviecard)에 titleli를추가
      //moviecard class 이름 "movie-titleli"로 추가
      let titleli = document.createElement("div");
      titleli.innerText = element.title;
      moviecard.appendChild(titleli);
      titleli.className = "movie-titleli";

      //overviewli라는 변수와 =  p 요소 추가
      //overviewli 변수에 텍스트추가 = api element.overview 값
      //부모객체(moviecard)에 overviewli를추가
      //overviewli class 이름 "movie-overviewli"로 추가

      let overviewli = document.createElement("p");
      overviewli.innerText = element.overview;
      moviecard.appendChild(overviewli);
      overviewli.className = "movie-overviewli";

      //score라는 변수와 =  p 요소 추가
      //score 변수에 텍스트추가 = api element.vote_average 값
      //부모객체(moviecard)에 score를 추가
      //score class 이름 "movie-score"로 추가

      let score = document.createElement("p");
      score.textContent = element.vote_average;
      moviecard.appendChild(score);
      score.className = "movie-score";

      // console.log(element.overview);
      // console.log(element.poster_path);
      // console.log(element.vote_average);
    });

    //id "search-input"을 찾아서 search변수 할당
    //input의 값이 변경 될 때마다 이벤트 발생
    //searchQuery변수 소문자로 변환 하여 searchQuery변수에 할당
    //movieCards변수에 .movie-card요소 선택
    let search = document.getElementById("search-input");
    search.addEventListener("input", function () {
      let searchQuery = this.value.toLowerCase();
      let movieCards = document.querySelectorAll(".movie-card");
      //영화 카드에 대해 반복
      //title변수에 ".movie-titleli"객체를 텍스트로 나타내어 소문자로 변환
      movieCards.forEach(function (card) {
        let title = card
          .querySelector(".movie-titleli")
          .innerText.toLowerCase();

        //검색어가 영화 제목에 포함되어 있는지 확인하고, 포함되어 있으면 해당 카드를 표시하고 그렇지 않으면 숨김
        if (title.includes(searchQuery)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  })
  .catch((err) => console.error(err));
