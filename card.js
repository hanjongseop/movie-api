export const moviecardmake = () => {
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
      response.results.forEach((element) => {
        let api = document.getElementById("api");
        let moviecard = document.createElement("li");
        moviecard.className = "movie-card";
        api.appendChild(moviecard);

        let post = document.createElement("div");
        moviecard.appendChild(post);
        let postimg = document.createElement("img");
        postimg.src = "https://image.tmdb.org/t/p/w185" + element.poster_path;
        post.appendChild(postimg);

        moviecard.addEventListener("click", handleClickCard);
        function handleClickCard({ target }) {
          if (target === moviecard) return;

          if (target.matches("movie-card")) {
            alert("영화 id:" + element.id);
          } else {
            alert("영화 id:" + element.id);
          }
        }

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
    })

    .catch((err) => console.error(err));
};
