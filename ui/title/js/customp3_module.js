

/*
  simple download link :
   https://drive.usercontent.google.com/download?id=1CEpQy-GuxySOz9mssy74NCSozrSwXJ3S&export=download&authuser=2&confirm=t&uuid=8472c0e1-d073-445c-9c3b-dd6df8e3021a&at=APZUnTUawUyrLq7GpyidRbfoHti7:1701862330822

   how to make a genesis link ?
   https://drive.usercontent.google.com/download?id=1CEpQy-GuxySOz9mssy74NCSozrSwXJ3S&export=download&authuser=2
   id = ??
   export = download
   authuser = ?? [0,1,....]
   if you loged in in browser with one account authuser = 0
      else you need to know the correct authuser

   ## second {send request}   
   <form id="download-form" action="https://drive.usercontent.google.com/download" method="get">
   <input type="submit" id="uc-download-link" class="goog-inline-block jfk-button jfk-button-action" value="التنزيل على أيّ حال"/>
   <input type="hidden" name="id" value="1CEpQy-GuxySOz9mssy74NCSozrSwXJ3S">
   <input type="hidden" name="export" value="download">
   <input type="hidden" name="authuser" value="0">
   <input type="hidden" name="confirm" value="t">
   <input type="hidden" name="uuid" value="d0d4d6df-99ca-4263-9805-eac26ddbfcc4">
   <input type="hidden" name="at" value="APZUnTVIuhzCcB3DWpO--VLft3cz:1701864019001">
   </form>

   ## then
      f = document.getElementById("download-form");
      s_f = new URLSearchParams(new FormData(f)).toString();
      f_a = f.action;
      download_link = `${f_a}?${s_f}`;

*/


/* initialize */
let netscape_url = window.location.origin+"/ui/player/netscape/netscape.txt";


function customp3_play(id,authuser=0){
    video_url = customp3_downloadURL(customp3_genesis(id,authuser),netscape_url);
    C = Requests.GET(netscape_url);
    Tree.CustomP3(video_url,netscape_url,C);

    hideMsg();
}



function customp3_genesis(id,authuser=0){

   return `https://drive.usercontent.google.com/download?id=${id}&export=download&authuser=${authuser}`;

}

function customp3_downloadURL(customp3_genesis_url,netscape_url){

    if(Network.isConnected()){

        C = Requests.GET(netscape_url);
        Requests.Header("Cookie",C);
        /* c point ++++++++++ */
        html_content = Requests.GET(customp3_genesis_url);

        parser = new DOMParser()
        doc = parser.parseFromString(html_content, 'text/html')

        f = doc.getElementById("download-form");
        s_f = new URLSearchParams(new FormData(f)).toString();
        f_a = f.action;
        d_l = `${f_a}?${s_f}`;
        return d_l;
    }else{
        return null;
    }

}




