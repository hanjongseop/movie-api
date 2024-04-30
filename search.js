export const cardsearch = () => {
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
};
