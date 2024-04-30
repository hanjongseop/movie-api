const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg3ZTZkMDRlNzg1YjBiOWRmNWZiOTZlNjAyNzFhZSIsInN1YiI6IjY2MjY3ODIxMmRkYTg5MDE4N2UzY2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m0VR-0DBlwf_cbftDltXdOACEDmLpdQ_8R3E6kmLDTg"
  }
};

fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.results);

    response.results.forEach((element) => {
      let moviecard = document.createElement("li");
      moviecard.className = "movie-card";
      document.getElementById("api").appendChild(moviecard);

      let post = document.createElement("div");
      moviecard.appendChild(post);

      let postimg = document.createElement("img");
      postimg.src = "https://image.tmdb.org/t/p/w185" + element.poster_path;
      post.appendChild(postimg);
      postimg.onclick = function () {
        alert("id:" + element.id);
        postimg.className = "movie-postimg";
      };

      let titleli = document.createElement("div");
      titleli.innerText = element.title;
      moviecard.appendChild(titleli);
      titleli.className = "movie-titleli";

      let overviewli = document.createElement("p");
      overviewli.innerText = element.overview;
      moviecard.appendChild(overviewli);
      overviewli.className = "movie-overviewli";

      let score = document.createElement("p");
      let scoreaverage = parseFloat(element.vote_average).toFixed(1);
      score.innerText = "평점: " + scoreaverage;
      moviecard.appendChild(score);
      score.className = "movie-score";
    });

    const searchInput = document.getElementById("search-input");
    searchInput.focus();

    function performSearch() {
      let searchQuery = searchInput.value.toLowerCase();
      let movieCards = document.querySelectorAll(".movie-card");
      movieCards.forEach(function (card) {
        let title = card.querySelector(".movie-titleli").innerText.toLowerCase();

        if (title.includes(searchQuery)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    document.getElementById("search-btn").addEventListener("click", performSearch);
    searchInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        performSearch();
      }
    });
  })

  .catch((err) => console.error(err));
