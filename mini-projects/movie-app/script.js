const API_URL =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=afa86ff9eeaea9be2435de8624d8bb35&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?api_key=afa86ff9eeaea9be2435de8624d8bb35&query="';

async function getMovies(url) {
	const res = await fetch(url);
	const data = await res.json();

	showMovies(data.results);
}
