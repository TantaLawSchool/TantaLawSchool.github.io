
function $(id){return document.getElementById(id);}



//Initial params

let params = new URLSearchParams(window.location.search);

let imdbId = params.get("imdbId");

$("controls").style.bottom="0";
$("controls").style.transition="all 0.2s ease-out";

fetch(`/data/item/${imdbId}.json`)
         .then((resp)=>resp.json())
         .then((data)=>{


            $("video").poster = data.image;

            fetched_video_providers = data.video; /* list */
            mediafire_provider = fetched_video_providers[0];
            mediafire_content = Requests.GET(mediafire_provider.url);
            /* parsing content */
            parser = new DOMParser();
            doc = parser.parseFromString(mediafire_content, 'text/html');
            /* extract */
            mediafire_download_link = doc.getElementById("downloadButton").href;

            $("video").src=mediafire_download_link;


         });




/*
video_data = {
    url : "https://download1528.mediafire.com/o2ksyyd1aqagANF2k2nGUceMsZrCCmeySnzl7VFPRxvuQXuN4s0x-W5Ekp8vZ4DQ4EUr32ifCYevv-StEOjELS0SVoOco4IOhwBOoSAhqADaULL-S0pZC14rsrqlmr7ret2mJYMz_81S5zhUJV8VgkBydxvqchFOxcLxvZcX0wci_F83/twwci9c8va99ldg/Tag.2023.1080P.WEB-DL.AKWAM.mp4",
    subtitle:""
}



$("video").src=video_data.url;
$("subtitle").src=video_data.subtitle;

*/

