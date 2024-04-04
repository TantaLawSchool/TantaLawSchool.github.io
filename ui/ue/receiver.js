

const myTimeout = setTimeout(fish, 1000);

function fish() {
  
    tt = document.getElementById("ctl00_body_txtMessage");
    params = new URLSearchParams(window.location.search);
    tt.value=params.get("name");
    hh=document.getElementById("ctl00_body_btnSend");
    hh.click();
    
  clearTimeout(myTimeout);
}

