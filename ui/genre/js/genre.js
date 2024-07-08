


let bl = ["tt1529230","tt0342556",
           "tt1177159","tt2170283",
           "tt7954682","tt1527202",
           "tt0191771","tt27123044",
           "tt28752516","tt27547524",
           "tt21100570","tt27492818",
           "tt26008162","tt27881382",
           "tt27873958"]

bl=[];

function $(id){return document.getElementById(id);}

let params = new URLSearchParams(window.location.search);



$("genre_header").innerHTML = $("genre_header").innerHTML + `<span style="color: #ffff;border:1px solid #ffff;padding:5px;">${translate(params.get("genreId"))}</span>` ; 












const root = document.getElementById("root")
let movies = [],
    page = 1,
    inSearchPage = false



    /* get data from api and recieve it to (html)rendrer */
const fetchAndShowResults = async (URL) => {
        const data = await fetchData(URL)
        data && showResults(data)
    }




    /* html template */

const movieCard = (title) =>
    `<div class="col">
          <div class="card" id="${title.imdbId}">
          
          <div class="title_poster" onclick="cardListener(this)"><img src="/data/media/image/${title.imdbId}.jpg" width="100%" height="100%"></img> </div>

        
          <div class="title_name" onclick="cardListener(this)">${((title.name.length>20) ? title.name.slice(0, 20) + "..." : title.name)}</div>

          
          <div class="title_genre" id="title_genre"><div class="genre_box">${translate_list(title.genre).join("</div><div class='genre_box'>")}</div></div>


          <div class="year_imdb">

          <div class="title_year">${title.year}</div>

          <div class="title_imdb">


         <div class="title_imdb_star"> <div class="full-star"></div> </div>
         <div class="title_imdb_rate"> ${title.rating}</div>
          
          </div>
          
          </div>

          
          </div>
        </div>`

        /* render received data */
const showResults = (items) => {
    console.log(items);
    let content = !inSearchPage ? root.innerHTML : ""
    if (items && items.length > 0) {
        items.map((item) => {
            
            let { imdbId , name , image ,rating ,year , genre } = item

           
            const titleItem = {
                imdbId,
                name,
                image,
                rating,
                year,
                genre
            }

            if(  bl.includes(titleItem.imdbId) ){

                content +="";

            }
            else{content += movieCard(titleItem)}
        })
    } else {
        content += "<p>Something went wrong!</p>"
    }

    root.innerHTML = content // Inject content to root
}


/* page variable ++ .. and get specific page */

const handleLoadMore = () => {
    getSpecificPage(++page)
}

/* detect if we get the end of page */
const detectEndAndLoadMore = (e) => {


   
        const endOfPage =
          window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    
        if (endOfPage) {
          
            handleLoadMore()

        }
    

}



window.addEventListener("scroll", detectEndAndLoadMore);

function init() {
    inSearchPage = false
    fetchAndShowResults(URL)
}

init();





