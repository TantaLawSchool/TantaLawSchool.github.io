
let specific_params = new URLSearchParams(window.location.search);

const URL = `/data/items-map/genre/${specific_params.get("genreId")}/page/page-1.json`;




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
    
    const URL = `/data/items-map/genre/${specific_params.get("genreId")}/page/page-${page}.json`
    fetchAndShowResults(URL);
    
}