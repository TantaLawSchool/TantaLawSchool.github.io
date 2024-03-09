
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
    /*
    Tree.CustomP3(video_url,netscape_url,C);
    */
   
   if(Android.isInstalled(mplayer_packageName)){

    Android.makeToast("player installed v: "+Android.getPackageVersionCode(mplayer_packageName));
    if(Android.getPackageVersionCode(mplayer_packageName)>=mplayer_versioncode){

        Android.makeToast("player version compatible");
        hideMsg();
        /* start activity */
        Tree.MPlayer_CustomP3(video_url,netscape_url,C);

    }else{
        /* show ----update--- message*/
        okjscode=`Android.openUrl('${mplayer_update_url}');`;
        new messagebox("Update", "يرجى تحديث مشغل الفيديو الخاص بالتطبيق . اضغط للمتابعة").show();
    }


   }else{
    /* player not installed*/
    hideMsg();
    /* show ----install---- message*/

    
        okjscode=`Android.openUrl('${mplayer_update_url}');`;
        new messagebox("Install", "يرجى تثبيت مشغل الفيديو الخاص بالتطبيق . اضغط للمتابعة").show();
        

   }

    
}






function customp3_genesis(fname){

    return `https://flawtantaedu-my.sharepoint.com/personal/ug_31146395_f-law_tanta_edu_eg/_layouts/15/download.aspx?SourceUrl=/personal/ug_31146395_f-law_tanta_edu_eg/Documents/${fname}`;
 
 }
 


function customp3_downloadURL(customp3_genesis_url){

    return customp3_genesis_url;

}


