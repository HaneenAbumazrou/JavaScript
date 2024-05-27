en-statemstns.js
ar-statements.js

let translationsEN={
    gessingGame:"gissing Game"
}


let translationsAR={
    gessingGame:"لعبة التحزير"
}


// take current language from local storage, if not exist, default is english
let currentLanguage=languages.en;

let translations=translationsEN;

function loadTranslation(){
    if (currentLanguage) {
        translations=translationsEN;
    }
    else {
        translations=translationsAR;
    }
}



let languages={
    en:0,
    ar:1
}