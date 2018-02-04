const translate = function() {

    function translate( lang, text ) {
        return fetch( `https://translation.googleapis.com/language/translate/v2?target=${lang}&q=${text}&key=AIzaSyAIFdFRm1VfdaMqVoTBtH9mm8WXmNz4Cew` )
    }


    return {
        translate
    }
}();