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

    //response.results를 메서드 배열 작업
    //moviecard라는 변수와 =  li요소 추가
    //moviecard class 이름movie-card로 생성
    //id "api" 찾아서 moviecard요소 추가
    response.results.forEach((element) => {
      let moviecard = document.createElement("li");
      moviecard.className = "movie-card";
      document.getElementById("api").appendChild(moviecard);

      let post = document.createElement("div");
      moviecard.appendChild(post);
      
      //post라는 변수와 =  lmg요소 추가
      //post.src = api이미지 받아오는주소 + api poster_path 값
      //부모객체의(moviecard)에 post를추가
      //post클릭시  alert ""발생
      //post class 이름은 "movie-post"로 추가
      let postimg = document.createElement("img");
      postimg.src = "https://image.tmdb.org/t/p/w185" + element.poster_path;
      post.appendChild(postimg);
      postimg.onclick = function () {
        alert("id:" + element.id);
        postimg.className = "movie-popostimgst";
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
      //scoreaverage변수에 element.vote_average 값이 나오고 .tofixed();로 소수점 반올림
      //score 변수에 텍스트추가 = scoreaverage 값
      //부모객체(moviecard)에 score를 추가
      //score class 이름 "movie-score"로 추가
      let score = document.createElement("p");
      let scoreaverage = parseFloat(element.vote_average).toFixed(1); // 소수점 반올림
      score.innerText = "평점: " + scoreaverage;
      moviecard.appendChild(score);
      score.className = "movie-score";
    });

    // 검색 함수 정의
    // 검색어 입력 input 요소에 대한 참조
    const searchInput = document.getElementById("search-input");

    // 검색 함수 정의
    function performSearch() {
      let searchQuery = searchInput.value.toLowerCase();
      let movieCards = document.querySelectorAll(".movie-card");

      movieCards.forEach(function (card) {
        let title = card
          .querySelector(".movie-titleli")
          .innerText.toLowerCase();

        if (title.includes(searchQuery)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    // 검색 버튼 클릭 시 실행되는 함수
    document
      .getElementById("search-btn")
      .addEventListener("click", performSearch);

    // 엔터 키 눌렀을 때 검색 실행
    searchInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        performSearch();
      }
    });
  })

  .catch((err) => console.error(err));
