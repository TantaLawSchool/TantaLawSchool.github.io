

/* events listener */



function cardListener(e){
    window.location.href="/ui/title/title.html?imdbId="+e.parentNode.id;
}



function playButtonListener(e){

    /*
    player_url = window.location.origin+"/ui/player/player.html?imdbId="+params.get("imdbId");

    Tree.Player(player_url);
    */

    Msg();
    
    setTimeout(function() {
        
        customp3_play(params.get("imdbId"));

    }, 1000);
    

    
}



function downloadButtonListener(e){


    console.log("start download..");
    
    doawnload_name = document.getElementById("title_name").innerText+"_"+document.getElementById("title_year").innerText+".mp4";

    console.log(doawnload_name);

    

    Msg();
    
    setTimeout(function() {
        
        Downloader(params.get("imdbId"),doawnload_name);

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

    s = JSON.parse($("tvSeriesP").textContent).season_val;
    e = JSON.parse($("tvSeriesP").textContent).episode_val;
    console.log(`play season: ${s} episode: ${e}`);

    Msg();
    Ads.showRewardedAd();
    setTimeout(function() {
        
        customp3_play(`${params.get("imdbId")}/${s}/${e}`);

    }, 1000);
    

    
}



function tvSeriesdownloadButtonListener(e){


    s = JSON.parse($("tvSeriesP").textContent).season_val;
    e = JSON.parse($("tvSeriesP").textContent).episode_val;
    console.log(`download season: ${s} episode: ${e}`);
    
    doawnload_name = document.getElementById("title_name").innerText+"_"+`S${s}E${e}`+".mp4";

    console.log(doawnload_name);

    

    Msg();
    Ads.showRewardedAd();
    setTimeout(function() {
        
        Downloader(`${params.get("imdbId")}/${s}/${e}`,doawnload_name);

    }, 1000);
    

}