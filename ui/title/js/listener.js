

/* events listener */



function cardListener(e){
    window.location.href="/ui/title/title.html?imdbId="+e.parentNode.id;
}




function favButtonListener(e){


    if(isFav(params.get("imdbId"))){

        delFav(params.get("imdbId"));
        $("fav-btn-text").innerText="اضافة الى المفضلة";
        $("fimg").src="../ue/a/love.png";
        $("fav-button").style.borderRadius="0";


    }else{

        setFav(params.get("imdbId"));
        $("fav-btn-text").innerText="مفضلة";
        $("fimg").src="../ue/a/loved.png";
        $("fav-button").style.borderRadius="0.5em";


    }


}





function playButtonListener(e){

    /*
    player_url = window.location.origin+"/ui/player/player.html?imdbId="+params.get("imdbId");

    Tree.Player(player_url);
    */

    /* history */
    if(isHistory(params.get("imdbId"))){
        delHistory(params.get("imdbId"));setHistory(params.get("imdbId"));
    }else{setHistory(params.get("imdbId"));}


    Msg();
    
    setTimeout(function() {
        
        customp3_play(params.get("imdbId"));

    }, 1000);
    

    
}



function downloadButtonListener(e){

    /* history */
    if(isHistory(params.get("imdbId"))){
        delHistory(params.get("imdbId"));setHistory(params.get("imdbId"));
    }else{setHistory(params.get("imdbId"));}


    console.log("start download..");
    
    download_name = document.getElementById("title_name").innerText+"_"+document.getElementById("title_year").innerText+".mp4";

    console.log(download_name);

    

    Msg();
    
    setTimeout(function() {
        
        Downloader(params.get("imdbId"),download_name);

    }, 1000);
    

}




/* seasons change listener */

function changeSeason() {
    var selectBox = document.getElementById("seasons");
    var selectedSeasonValue = selectBox.options[selectBox.selectedIndex].value;
    console.log("season: "+selectedSeasonValue+" selected.");
    episodes_n = JSON.parse(document.getElementById('data').textContent).episodeGuide[selectedSeasonValue];
    console.log("episodes number of season is: "+episodes_n);

    /*update tvSeriesP*/
    tvSeriesP = $("tvSeriesP");
    obj = JSON.parse(tvSeriesP.textContent);
    obj.season_val = selectedSeasonValue;
    json = JSON.stringify(obj);
    tvSeriesP.textContent = json;

    drawEpisodes(episodes_n);
   }



function episodeListener(e){

    console.log("episode: "+e.id);


    choose_episode(e.id);


   }







   function tvSeriesplayButtonListener(e){

    /*
    player_url = window.location.origin+"/ui/player/player.html?imdbId="+params.get("imdbId");

    Tree.Player(player_url);
    */

    /* history */
    if(isHistory(params.get("imdbId"))){
        delHistory(params.get("imdbId"));setHistory(params.get("imdbId"));
    }else{setHistory(params.get("imdbId"));}


    s = JSON.parse($("tvSeriesP").textContent).season_val;
    e = JSON.parse($("tvSeriesP").textContent).episode_val;
    console.log(`play season: ${s} episode: ${e}`);

    Msg();
    
    setTimeout(function() {
        
        customp3_play(`${params.get("imdbId")}/${s}/${e}`);

    }, 1000);
    

    
}



function tvSeriesdownloadButtonListener(e){

    /* history */
    if(isHistory(params.get("imdbId"))){
        delHistory(params.get("imdbId"));setHistory(params.get("imdbId"));
    }else{setHistory(params.get("imdbId"));}
    

    s = JSON.parse($("tvSeriesP").textContent).season_val;
    e = JSON.parse($("tvSeriesP").textContent).episode_val;
    console.log(`download season: ${s} episode: ${e}`);
    
    download_name = document.getElementById("title_name").innerText+"_"+`S${s}E${e}`+".mp4";

    console.log(download_name);

    

    Msg();
    
    setTimeout(function() {
        
        Downloader(`${params.get("imdbId")}/${s}/${e}`,download_name);

    }, 1000);
    

}