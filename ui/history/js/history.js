

function $(id){return document.getElementById(id);}


function refreshHistory(){
    $("results").innerHTML=``;
    

    if(getAllHistory().length==0){

        $("results").innerHTML="<div class='empty_history'>  السجل فارغ <img src='../ue/a/blank-1.png' height='50px'></img>";

    }else{

        drawResults(getAllHistory());

}

}





function drawResults(imdbIdsList){

    $("results").innerHTML = `
    <div class="wrapper">

         <div class="row" id="root"></div>

    </div>
    `;

    

    for (var i in imdbIdsList){

        fetch(`/data/item/${imdbIdsList[i]}.json`)
         .then((resp)=>resp.json())
         .then((title)=>{

            $("root").innerHTML = $("root").innerHTML + `<div class="col">
            <div class="card" id="${title.imdbId}">
            
            <div class="title_poster" onclick="cardListener(this)"><img src="/data/media/image/${title.imdbId}.jpg" width="100%" height="100%"></img> 
            <div class="fav_logo_space"> <img src="../ue/a/history.png" width="100%" height="100%"></img> </div>
            </div>
  
          
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



if(getAllHistory().length==0){

    $("results").innerHTML="<div class='empty_history'>  السجل فارغ <img src='../ue/a/blank-1.png' height='50px'></img>";

}else{

    drawResults(getAllHistory());

}




