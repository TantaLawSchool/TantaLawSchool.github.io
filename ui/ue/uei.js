class UEI {
    constructor() {
    
    }
    Main(p){
        console.log(p);
        window.location.href = p;
    }
    Find(p) {
        console.log(p);
        window.location.href = p;
    }
    Genre(p){
        console.log(p);
        window.location.href = p;
    }
    Title(p){
        console.log(p);
        window.location.href = p;
    }
    Player(p){
        console.log(p);
        window.location.href = p;
    }
    Fav(){
        window.location.href = "/ui/fav/fav.html";
    }
    Profile(){
        window.location.href = "/ui/profile/profile.html";
    }
    History(){
        window.location.href = "/ui/history/history.html";
    }
    Ask(){
        window.location.href = "/ui/ask/ask.html";
    }
    CustomP3(vURL,authURL,C){
        Tree.CustomP3(vURL,authURL,C);
        
    }
    Downloader(v_url,v_name,cookie){
        Tree.Downloader(v_url,v_name,cookie);
        
    }
    MPlayer_CustomP3(vURL,authURL,C){
        Tree.MPlayer_CustomP3(vURL,authURL,C);
        
    }
    MPlayer_Downloader(v_url,v_name,cookie){
        Tree.MPlayer_Downloader(v_url,v_name,cookie);
        
    }
    
    
    }


const UI = new UEI();