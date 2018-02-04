const helper = function() {

    function hideEl( el ) {
        el.style.visibility = 'hidden';
    }
    
    function showEl( el ) {
        el.style.visibility = 'show';
    }

    return {
        hideEl, 
        showEl
    }
}()