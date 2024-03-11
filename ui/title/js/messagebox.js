
class messagebox {
    defaultSettings = {
        messagebox_background: "#493313",
        messagebox_color: "#ffff",
        title_background: "#111",
        title_color: "#ffff",
        controls_background: "#1111",
        controls_color: "#ffff",
        showcontrols: true,
        controls_text: " موافق ",
        messagebox_posx: "center",
        messagebox_posy: "center",
        show_close: true,
    }
    constructor(title, content, settings) {
        this.title = title || "MessageBox";
        this.content = content || "";
        this.settings = settings || this.defaultSettings;
    }
    get title() { return this._title; }
    set title(newValue) { this._title = newValue || "MessageBox"; }
    get content() { return this._content; }
    set content(newValue) { this._content = newValue || ""; }
    get settings() { return this._settings; }
    set settings(newValue) { this._settings = newValue || this.defaultSettings; }

    show() {
        let winpos = (this.settings.messagebox_posx + this.settings.messagebox_posy) || "centercenter";
        var newposcss = "";
        switch (winpos) {
            case "lefttop":
                newposcss = "left:0;top:0;";
                break;
            case "centertop":
                newposcss = "left:50%;top:0;-webkit-transform: translateX( -50%);-moz-transform: translateX( -50%);-ms-transform: translateX( -50%);-o-transform: translateX( -50%);transform: translateX( -50%);";
                break;
            case "righttop":
                newposcss = "right:0;top:0;";
                break;
            case "leftcenter":
                newposcss = "left:0;top:50%;-webkit-transform: translateY(-50%); -moz-transform: translateY(-50%);-ms-transform: translateY(-50%);-o-transform: translateY(-50%);transform: translateY(-50%);";
                break;
            case "centercenter":
                newposcss = "left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);transform: translate(-50%, -50%);";
                break;
            case "rightcenter":
                newposcss = "right: 0;top: 50%;-webkit-transform: translateY(-50%);-moz-transform: translateY(-50%);-ms-transform: translateY(-50%); -o-transform: translateY(-50%);transform: translateY(-50%);";
                break;
            case "leftbottom":
                newposcss = "left:0;bottom:0;";
                break;
            case "centerbottom":
                newposcss = "left: 50%;bottom: 0;-webkit-transform: translateX( -50%);-moz-transform: translateX( -50%);-ms-transform: translateX( -50%);-o-transform: translateX( -50%);transform: translateX( -50%);";
                break;
            case "rightbottom":
                newposcss = "right:0;bottom:0;";
                break;
        }
        var pardiv = document.createElement("div");
        var pardiv_bg = this.settings.messagebox_background || this.defaultSettings.messagebox_background;
        var pardiv_c = this.settings.messagebox_color || this.defaultSettings.messagebox_color;
        pardiv.style = "display: -webkit-box; display: -webkit-flex;display: -moz-box; display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-webkit-flex-direction: column; -moz-box-orient: vertical;-moz-box-direction: normal;-ms-flex-direction: column;flex-direction: column; -webkit-box-align: center;-webkit-align-items: center; -moz-box-align: center; -ms-flex-align: center; align-items: center;-webkit-box-pack: center;-webkit-justify-content: center; -moz-box-pack: center; -ms-flex-pack: center; justify-content: center;position: fixed;width: 60%; border: 1px solid" + pardiv_bg + "; overflow: hidden; max-width: 80%;  max-height: 80%;-webkit-box-shadow: 0px 0 5px #000; box-shadow: 0px 0 5px #000; margin: 10px;border-radius: 5px;color:" + pardiv_c + ";background:" + pardiv_bg + ";" + newposcss;

        var titlediv = document.createElement("div");
        titlediv.style = "display: -webkit-box;display: -webkit-flex;display: -moz-box;display: -ms-flexbox; display: flex;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-webkit-flex-direction: row;-moz-box-orient: horizontal;-moz-box-direction: normal;-ms-flex-direction: row;flex-direction: row;width: 100%;-webkit-box-align: center;-webkit-align-items: center;-moz-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: justify;-webkit-justify-content: space-between;-moz-box-pack: justify;-ms-flex-pack: justify;justify-content: space-between;font-size: 24px;";
        titlediv.style.backgroundColor = this.settings.title_background || this.defaultSettings.title_background;
        titlediv.style.color = this.settings.title_color || this.defaultSettings.title_color;

        var titlespan = document.createElement("span");
        titlespan.style = "font-size: 24px;margin-left: 5px;text-transform: capitalize;color:inherit";
        titlespan.innerText = this.title || "MessageBox";

        if (this.settings.show_close) {
            var titleclose = document.createElement("a");
            titleclose.innerHTML = "&times;";
            titleclose.style = "color:#F5F0F0; padding: 8px;cursor: pointer; background-color: #1111;";
            titleclose.title = "Close";
            titleclose.onclick = function() { document.body.removeChild(this.parentNode.parentNode); }
        }

        titlediv.appendChild(titlespan);

        if (this.settings.show_close) { titlediv.appendChild(titleclose); }

        var contentdiv = document.createElement("div");
        contentdiv.innerText = this.content;
        contentdiv.style = "padding: 5px;overflow-x: hidden;overflow-y: auto;overflow-wrap: normal;font-size: 18px;";
        contentdiv.style.backgroundColor = this.settings.messagebox_background || this.defaultSettings.messagebox_background;
        contentdiv.style.color = this.settings.messagebox_color || this.messagebox_color;

        if (this.settings.showcontrols) {
            var controlsdiv = document.createElement("div");
            controlsdiv.style = "padding: 5px;margin-top: 2px;display: -webkit-box; display: -webkit-flex;display: -moz-box;display: -ms-flexbox;display: flex;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-webkit-flex-direction: row;-moz-box-orient: horizontal;-moz-box-direction: normal;-ms-flex-direction: row;flex-direction: row;-webkit-box-align: center;-webkit-align-items: center;-moz-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: end;-webkit-justify-content: flex-end;-moz-box-pack: end;-ms-flex-pack: end;justify-content: flex-end;width: 100%;";
            controlsdiv.style.backgroundColor = this.settings.controls_background || this.defaultSettings.controls_background;
            controlsdiv.style.color = this.settings.controls_color || this.defaultSettings.controls_color;

            var okbtn = document.createElement("a");
            okbtn.innerText = this.settings.controls_text || "Close";
            okbtn.title = this.settings.controls_text || "Close";
            okbtn.style = "margin: 0 5px;cursor: pointer;outline: none;border: none;font-size: 14px;padding: 5px;position: relative;background: inherit;color: inherit;text-transform: uppercase;background-color: rgba(0, 0, 0, 0.3);"
            okbtn.onclick = function() { 
                document.body.removeChild(this.parentNode.parentNode); 
                /* evaluate js */
                eval(okjscode);
            }
            controlsdiv.appendChild(okbtn);
        }

        pardiv.appendChild(titlediv);
        pardiv.appendChild(contentdiv);
        if (this.settings.showcontrols) {
            pardiv.appendChild(controlsdiv);
        }
        document.body.appendChild(pardiv);
        return "Done";
    }
}