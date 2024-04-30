import { moviecardmake } from "./card.js";
import { cardsearch } from "./search.js";
let movies = moviecardmake();
let search = cardsearch();

const searchInput = document.getElementById("search-input");
searchInput.focus();
