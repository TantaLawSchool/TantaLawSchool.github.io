


let bl = ["tt1529230","tt0342556",
           "tt1177159","tt2170283",
           "tt7954682","tt1527202",
           "tt0191771","tt27123044",
           "tt28752516","tt27547524",
           "tt21100570","tt27492818",
           "tt26008162","tt27881382",
           "tt27873958"]





function $(id){return document.getElementById(id);}

let params = new URLSearchParams(window.location.search);



let q = params.get("q");


$("cepret-search").value = q;

$("results_of").innerHTML = `<span style="color:rgb(255,255,255);"> نتائج البحث عن :  </span> <span style="color:orange;">${q}</span>`;







function drawResults(imdbIdsList){

    $("results").innerHTML = `
    <div class="wrapper">

         <div class="row" id="root"></div>

    </div>
    `;

    /* filter */
    let sub_imdbIdsList = [];
    for (var k in imdbIdsList){if (bl.includes(imdbIdsList[k])){/*dont push*/}else{/*push*/ sub_imdbIdsList.push(imdbIdsList[k]);}}
    imdbIdsList = sub_imdbIdsList;

    for (var i in imdbIdsList){

        fetch(`/data/item/${imdbIdsList[i]}.json`)
         .then((resp)=>resp.json())
         .then((title)=>{

            $("root").innerHTML = $("root").innerHTML + `<div class="col">
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


         })
         //If error occurs
         .catch((err) => {
           console.log("Error in draw some of results card");
           console.log(err);
         });


    }

}












fetch("/data/items-map/search/sinr.json")
.then((resp) => resp.json())
.then((data) => {


    let miniSearch = new MiniSearch({
        fields: ['name','imdbId'],               // fields to index for full-text search
        storeFields: ['name', 'imdbId'] // fields to return with search results
      })

    // Index all data
    miniSearch.addAll(data);
    //console.log(data);

    // Search with 0.2 fuzzy
    let results = miniSearch.search(q,{ fuzzy: 0.2 });

    console.log(results);

    if (results.length==0){
         $("results").innerHTML="<div class='no_results'>  لا  توجد نتائج لهذا البحث ! ";
    }else{

        if(results.length>10){
           console.log("search results length more than 10 items");
           let imdbIds = [];
           for (var i=0;i<10;i++){

                imdbIds.push(results[i]["imdbId"]);
           }

           // draw
           drawResults(imdbIds);


        }
        else{

            console.log("search results length less than 10 items");
            let imdbIds = [];
            for (var i=0;i<results.length;i++){

                imdbIds.push(results[i]["imdbId"]);
           }

           // draw
           drawResults(imdbIds);


        }


    }


}).catch(() => {
    console.log("Network error");
  });



