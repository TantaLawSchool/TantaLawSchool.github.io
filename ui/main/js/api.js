/* themoviedb api */
const apiKey = "3fd2be6f0c70a2a598f084ddfb75487c";
const URL = "/data/items-map/items/page/page-1.json";
const imgURL = "https://image.tmdb.org/t/p/w1280";
const searchURL =
    "https://api.themoviedb.org/3/search/movie?&api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";




// Fetch json data from URL
async function fetchData(URL) {
    try {
        const data = await fetch(URL).then((res) => res.json());
        return data;
    } catch (error) {
        console.log(error.message)
        return null;
    }
}



const getSpecificPage = (page) => {
    //const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`;
    const URL = `/data/items-map/items/page/page-${page}.json`
    fetchAndShowResults(URL);
}