
class messagebox {
    defaultSettings = {
        messagebox_background: "#ffff",
        messagebox_color: "#000",
        title_background: "#111",
        title_color: "#ffff",
        controls_background: "#ffff",
        controls_color: "#000",
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


class Internationalization {
    constructor(defaultLang = 'en') {
      this.defaultLang = defaultLang; // اللغة الافتراضية
      this.translations = {}; // مكان تخزين الترجمات
      this.currentLang = defaultLang; // اللغة الحالية
    }
  
    // تحميل الترجمات من ملف أو مصدر آخر
    loadTranslations(lang, translations) {
      if (!this.translations[lang]) {
        this.translations[lang] = {};
      }
      this.translations[lang] = { ...this.translations[lang], ...translations };
    }
  
    // تعيين اللغة الحالية
    setLanguage(lang) {
      if (this.translations[lang]) {
        this.currentLang = lang;
      } else {
        console.warn(`اللغة ${lang} غير مدعومة، سيتم استخدام اللغة الافتراضية.`);
        this.currentLang = this.defaultLang;
      }
    }
  
    // استرجاع الترجمة بناءً على النص
    translate(key) {
      const translation = this.translations[this.currentLang]?.[key];
      if (translation) {
        return translation;
      }
      // إذا لم تكن الترجمة موجودة، استرجاع النص الأصلي
      return key;
    }

    // ترجمة قائمة من المفاتيح
    translateList(list) {
      return list.map(item => this.translate(item)); // استخدام map لترجمة كل عنصر في القائمة
    }

  
    // تغيير النصوص في واجهة المستخدم تلقائيًا بناءً على اللغة الحالية
    localizeUI() {
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerText = this.translate(key);
      });
    }
  }
  
  // قاموس الترجمة من الإنجليزية إلى العربية
  const en_ar_dic = {
    "Action": "أكشن",
    "Adventure": "مغامرة",
    "Animation": "رسوم متحركة",
    "Biography": "سيرة ذاتية",
    "Comedy": "كوميدى",
    "Crime": "جريمة",
    "Documentary": "وثائقى",
    "Drama": "دراما",
    "Family": "عائلى",
    "Fantasy": "خيال",
    "Film-Noir": "Film-Noir",
    "History": "تاريخ",
    "Horror": "رعب",
    "Music": "موسيقى",
    "Musical": "موسيقي",
    "Mystery": "لغز",
    "Romance": "رومانسى",
    "Sci-Fi": "خيال علمى",
    "Short": "قصير",
    "Sport": "رياضة",
    "Thriller": "اثارة",
    "War": "حرب",
    "Western": "غرب أمريكى"
  };
  
  // إنشاء كائن من الـ Internationalization
  const i18n = new Internationalization();
  
  // تحميل الترجمات
  i18n.loadTranslations('en', {
    "Action": "Action",
    "Adventure": "Adventure",
    "Animation": "Animation",
    "Biography": "Biography",
    "Comedy": "Comedy",
    "Crime": "Crime",
    "Documentary": "Documentary",
    "Drama": "Drama",
    "Family": "Family",
    "Fantasy": "Fantasy",
    "Film-Noir": "Film-Noir",
    "History": "History",
    "Horror": "Horror",
    "Music": "Music",
    "Musical": "Musical",
    "Mystery": "Mystery",
    "Romance": "Romance",
    "Sci-Fi": "Sci-Fi",
    "Short": "Short",
    "Sport": "Sport",
    "Thriller": "Thriller",
    "War": "War",
    "Western": "Western"
  });
  i18n.loadTranslations('ar', en_ar_dic); // تحميل الترجمات من قاموس en_ar_dic
  
  // تغيير اللغة إلى العربية
  i18n.setLanguage('ar');
  




  class LocalStorageManager {
    constructor() {
      // التأكد من أن كل شيء مُهيأ
      this.initializeIfNeeded("fav", "[]");
      this.initializeIfNeeded("profile", '{"uname":"","fname":"","lname":"","email":""}');
      this.initializeIfNeeded("resume","[]");
      this.initializeIfNeeded("history", "[]");
      this.initializeIfNeeded("ask", "[]");
    }
  
    // التحقق إذا كان المفتاح مُهيأ
    initializeIfNeeded(key, defaultValue) {
      if (!this.isInitialized(key)) {
        this.initialize(key, defaultValue);
      }
    }
  
    // تخزين القيمة في LocalStorage
    initialize(key, value) {
      localStorage.setItem(key, value);
    }
  
    // التحقق مما إذا كان المفتاح موجودًا في LocalStorage
    isInitialized(key) {
      return localStorage.getItem(key) !== null;
    }
  
    // الحصول على جميع مفاتيح LocalStorage
    getAllLocalStorageKeys() {
      let k_arr = [];
      let length = localStorage.length;
      for (let i = 0; i < length; i++) {
        k_arr.push(localStorage.key(i));
      }
      return k_arr;
    }
  
    // مسح جميع البيانات من LocalStorage
    clearLocalStorage() {
      localStorage.clear();
    }
  
    /* مفضلات (Fav) */
  
    getAllFav() {
      return JSON.parse(localStorage.getItem("fav")) || [];
    }
  
    setFav(id) {
      let favArr = this.getAllFav();
      favArr.push(id);
      localStorage.setItem("fav", JSON.stringify(favArr));
    }
  
    delFav(id) {
      if (this.isFav(id)) {
        let favArr = this.getAllFav();
        favArr.splice(favArr.indexOf(id), 1);
        localStorage.setItem("fav", JSON.stringify(favArr));
      }
    }
  
    isFav(id) {
      let favArr = this.getAllFav();
      return favArr.includes(id);
    }
  
    /* سجل المشاهدة (History) */
  
    getAllHistory() {
      return JSON.parse(localStorage.getItem("history")) || [];
    }
  
    setHistory(id) {
      let historyArr = this.getAllHistory();
      historyArr.push(id);
      localStorage.setItem("history", JSON.stringify(historyArr));
    }
  
    delHistory(id) {
      if (this.isHistory(id)) {
        let historyArr = this.getAllHistory();
        historyArr.splice(historyArr.indexOf(id), 1);
        localStorage.setItem("history", JSON.stringify(historyArr));
      }
    }
  
    isHistory(id) {
      let historyArr = this.getAllHistory();
      return historyArr.includes(id);
    }
  
    clearHistory() {
      localStorage.setItem("history", "[]");
    }
  
    /* الملف الشخصي (Profile) */
  
    getAllProfile() {
      return JSON.parse(localStorage.getItem("profile")) || {};
    }
  
    setProfile(profile, value) {
      let profileObj = this.getAllProfile();
      profileObj[profile] = value;
      localStorage.setItem("profile", JSON.stringify(profileObj));
    }
  
    getProfile(profile) {
      let profileObj = this.getAllProfile();
      return profileObj[profile];
    }

    /* استكمال مشاهدة ال seasons وال episodes */

    getAllResume(){
        return JSON.parse(localStorage.getItem("resume")) || [];
    }

    isResume(id){
        const resumArr = this.getAllResume();
        for (var i=0;i<resumArr.length;i++){
            if(resumArr[i]["id"]==id){
                return true;
            }
        }
        return false;
    }

    setResume(id,season,episode){
        if(this.isResume(id)){
            const resumArr = this.getAllResume();
            for (var i=0;i<resumArr.length;i++){
                if(resumArr[i]["id"]==id){
                   resumArr[i]["season"]=season;
                   resumArr[i]["episode"]=episode;
                   localStorage.setItem("resume", JSON.stringify(resumArr));
                   break;
                }
            }


        }else{
            const resumArr = this.getAllResume();
            resumArr.push({"id":id,"season":season,"episode":episode});
            localStorage.setItem("resume", JSON.stringify(resumArr));

        }
    }

    getResume(id){
        if(this.isResume(id)){
            const resumArr = this.getAllResume();
            for (var i=0;i<resumArr.length;i++){
                if(resumArr[i]["id"]==id){
                return resumArr[i];
                }
            }

        }else{
            this.setResume(id,1,1);
            return {"id":id,"season":1,"episode":1};
        }
    }
  
    /* الأسئلة (Ask) */
  
    getAllAsk() {
      return JSON.parse(localStorage.getItem("ask")) || [];
    }
  
    setAsk(name) {
      let askArr = this.getAllAsk();
      askArr.push(name);
      localStorage.setItem("ask", JSON.stringify(askArr));
    }
  
    delAsk(name) {
      if (this.isAsk(name)) {
        let askArr = this.getAllAsk();
        askArr.splice(askArr.indexOf(name), 1);
        localStorage.setItem("ask", JSON.stringify(askArr));
      }
    }
  
    isAsk(name) {
      let askArr = this.getAllAsk();
      return askArr.includes(name);
    }
  }
  
  // استخدام الكلاس:
  const localStorageManager = new LocalStorageManager();

