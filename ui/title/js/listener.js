

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
    Ads.showRewardedAd();
    setTimeout(function() {
        
        customp3_play(params.get("imdbId"));

    }, 1000);
    

    
}



function downloadButtonListener(e){


    console.log("start download..");
    
    doawnload_name = document.getElementById("title_name").innerText+"_"+document.getElementById("title_year").innerText+".mp4";

    console.log(doawnload_name);

    

    Msg();
    Ads.showRewardedAd();
    setTimeout(function() {
        
        Downloader(params.get("imdbId"),doawnload_name);

    }, 1000);
    

}


