






function Downloader(fname,download_name){
    v_url = downloader_downloadURL(downloader_genesis(fname));
    v_name = download_name;
    cookie = Requests.GET(netscape_url);
    /*
    Tree.Downloader(v_url,v_name,cookie);
    */

    if(Android.isInstalled(mplayer_packageName)){

        Android.makeToast("player installed v: "+Android.getPackageVersionCode(mplayer_packageName));
        if(Android.getPackageVersionCode(mplayer_packageName)>=mplayer_versioncode){
    
            Android.makeToast("player version compatible");
            hideMsg();
            /* start activity */
            Tree.MPlayer_Downloader(v_url,v_name,cookie);
    
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






function downloader_genesis(fname){

    return `https://flawtantaedu-my.sharepoint.com/personal/ug_31146395_f-law_tanta_edu_eg/_layouts/15/download.aspx?SourceUrl=/personal/ug_31146395_f-law_tanta_edu_eg/Documents/${fname}`;
 
 }
 


function downloader_downloadURL(customp3_genesis_url){

    return customp3_genesis_url;

}


