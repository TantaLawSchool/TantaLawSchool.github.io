
function $(id) { return document.getElementById(id); }

let categories = document.getElementsByClassName("category");




function draw_category_content(cat_name,board_ref){


    fetch(`/data/items-map/category/${cat_name}.json`)
         .then((resp)=>resp.json())
         .then((data)=>{

          cat_imdbIds = data;

       for (var i in cat_imdbIds){


        fetch(`/data/item/${cat_imdbIds[i]}.json`)
             .then((resp)=>resp.json())
             .then((data)=>{
    
              var div = document.createElement("div");
              div.innerHTML = `<div class='cat_card' id='${data.imdbId}'>
              <div class="title_poster" onclick="cardListener(this)"><img src="/data/media/image/${data.imdbId}.jpg" width="100%" height="100%"></img> </div>
              <div class="title_name" onclick="cardListener(this)">${((data.name.length>20) ? data.name.slice(0, 20) + "..." : data.name)}</div>
              <div class="title_genre" id="title_genre"><div class="genre_box">${translate_list(data.genre).join("</div><div class='genre_box'>")}</div></div>
    
    
              <div class="year_imdb">
    
              <div class="title_year">${data.year}</div>
    
              <div class="title_imdb">
    
    
              <div class="title_imdb_star"> <div class="full-star"></div> </div>
              <div class="title_imdb_rate"> ${data.rating}</div>
              
              </div>
              
              </div>
    
    
              </div>`;
              board_ref.appendChild(div);
    
             })
    
    
    
      }

    })




}














for (var i=0; i<categories.length; i++){

    

    cat_ref = categories.item(i);
    cat_name = cat_ref.id;
    cat_board = cat_ref.getElementsByClassName("category-content")[0];
   

    draw_category_content(cat_name,cat_board);

       

}



