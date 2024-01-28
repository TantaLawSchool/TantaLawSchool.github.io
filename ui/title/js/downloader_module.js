

/* initialize */
let netscape_url = window.location.origin+"/ui/player/netscape/netscape.txt";




function Downloader(fname,download_name){
    v_url = downloader_downloadURL(downloader_genesis(fname));
    v_name = download_name;
    c_url = netscape_url;
    Tree.Downloader(v_url,v_name,c_url);

    
}






function downloader_genesis(fname){

    return `https://flawtantaedu-my.sharepoint.com/personal/ug_31146395_f-law_tanta_edu_eg/_layouts/15/download.aspx?SourceUrl=/personal/ug_31146395_f-law_tanta_edu_eg/Documents/${fname}`;
 
 }
 


function downloader_downloadURL(customp3_genesis_url){

    return customp3_genesis_url;

}


