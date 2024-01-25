
/*

  simple download link :
         https://flawtantaedu-my.sharepoint.com/personal/ug_31146395_f-law_tanta_edu_eg/_layouts/15/download.aspx?SourceUrl=/personal/ug_31146395_f-law_tanta_edu_eg/Documents/tt0046949


         how to make a genesis link ?


*/



/* initialize */
let netscape_url = window.location.origin+"/ui/player/netscape/netscape.txt";




function customp3_play(fname){
    video_url = customp3_downloadURL(customp3_genesis(fname));
    C = Requests.GET(netscape_url);
    Tree.CustomP3(video_url,netscape_url,C);

    hideMsg();
}






function customp3_genesis(fname){

    return `https://flawtantaedu-my.sharepoint.com/personal/ug_31146395_f-law_tanta_edu_eg/_layouts/15/download.aspx?SourceUrl=/personal/ug_31146395_f-law_tanta_edu_eg/Documents/${fname}`;
 
 }
 


function customp3_downloadURL(customp3_genesis_url){

    return customp3_genesis_url;

}


