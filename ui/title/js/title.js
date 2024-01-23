
function $(id) { return document.getElementById(id); }


//Initial References

let result = document.getElementById("result");

let params = new URLSearchParams(window.location.search);

/*
  Test case :
            /ui/title/title.html?imdbId=tt0325980
 */


function drawCards(related_data){

  for (var i in related_data){


    fetch(`/data/item/${related_data[i]}.json`)
         .then((resp)=>resp.json())
         .then((data)=>{

          var div = document.createElement("div");
          div.innerHTML = `<div class='card' id='${data.imdbId}'>
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
          $("related").appendChild(div);

         })



  }

}




//Function to fetch data from API
let getTitle = () => {
   let imdbId = params.get("imdbId");
   let url = `/data/item/${imdbId}.json`;
   
  
 
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //If title IS Movie
        console.log(data);
        if (data.type == "Movie") {
          parts_flag = false;

          if(data.related.length==0){
            $("related").remove();
            parts_flag = false;
          }else{
            parts_flag = true;
            /* draw cards */
            drawCards(data.related);
            
          }

          result.innerHTML = `
          <div class="info">
            <img src="/data/media/image/${data.imdbId}.jpg" class='poster'>
            <div>
              <h2>${data.name}</h2>
              <div class="rating">
                <img src="./images/star-icon.svg">
                <h4>${data.rating}</h4>
              </div> 
              <div class="details">
                <span>${data.certificate}</span>
                <span style="color:yellow">${data.year}</span>
                <span>${data.time}</span>
              </div>
              <div class="genre">
                <div>${translate_list(data.genre).join("</div><div>")}</div>
              </div>   
            </div>
          </div>

          <div class="play-button-space">
          
          <div class="play-button" onclick="playButtonListener(this)">
               <div class="play-btn"> <span></span> </div>
                <div class="play-btn-text">
            تشغيل
                </div>
          </div>

          
          </div>

          <h3>${Ar_Story}</h3>
          <p>${data.arDescription}</p>
         
          `;
          if(!parts_flag){
          $("wrapper").style.top="50%";
          $("wrapper").style.transform="translate(-50%,-50%)";
                         }
        }
        //If title does NOT Movie 
        else {
          result.innerHTML = `<h3 class="msg">Not Movie</h3>`;
        }
      })
      //If error occurs
      .catch(() => {
        result.innerHTML = `<h3 class="msg">!حدث خطأ ما</h3>`;
      });
  


};

//Call the getTitle()
getTitle();





/* Dev */
/* for developing purpose */

/*

player_url = window.location.origin+"/ui/player/player.html";

Tree.Player(player_url);


*/
