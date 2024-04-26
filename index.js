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
    console.log(response.results)

    response.results.forEach(element => {

      let moviecard =document.createElement("li")

      let post =document.createElement("img")
      post.src ="https://image.tmdb.org/t/p/w185" + element.poster_path;
      moviecard.appendChild(post);
      post.onclick = function(){
        alert("id:"+element.id)
      }

      let titleli =document.createElement("div")
      titleli.innerText=element.title;
      moviecard.appendChild(titleli);
     
      let overviewli =document.createElement("p")
      overviewli.innerText=element.overview;
      moviecard.appendChild(overviewli);
      
      let score =document.createElement("p")
      score.textContent=element.vote_average;
      moviecard.appendChild(score);


      document.getElementById("api").appendChild(moviecard);





    // console.log(element.title);
    // console.log(element.overview);
    // console.log(element.poster_path); 
    // console.log(element.vote_average); 

   
    });

  })
  .catch((err) => console.error(err));

  
