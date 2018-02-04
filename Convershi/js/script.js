



function showImage(src, target) {
    var fr = new FileReader();

    fr.onload = function(){
      target.src = fr.result;
    }
    fr.readAsDataURL(src.files[0]);

}

function putImage() {
    var src = document.getElementById("select_image");
    var target = document.getElementById("target");
    showImage(src, target);
}

document.addEventListener( 'DOMContentLoaded', () => {

    // ===== cache DOM ===== //
    const select1 = document.querySelector( '#inputGroupSelect01' ),
          select2 = document.querySelector( '#inputGroupSelect02' ),
          input   = document.querySelector( '#usr' ),
          content = document.querySelector( '#content' ),
          sidebar = document.querySelector( '#sidebar' ),
          recording = document.querySelector( '.recording' ),
          submitBtn = document.querySelector( '.submit-btn' ),
          btnFile   = document.querySelector( '.btn-file' ),
          formGroup = document.querySelector( '.form-group' ),
          slideToggle = document.querySelector( '.slide-toggle' ),
          toggleText  = document.querySelector( '.toggle-text' ),
          toggleVoice = document.querySelector( '.toggle-voice' ),
          togglePicture = document.querySelector( '.toggle-picture' );


    
    toggleText.addEventListener( 'click', () => {
        helper.hideEl( recording );
        helper.showEl( formGroup );
        helper.showEl( submitBtn );
    } )

    toggleVoice.addEventListener( 'click', () => {
        helper.showEl( recording );
        helper.hideEl( formGroup );
        helper.hideEl( submitBtn );
    } )

    togglePicture.addEventListener( 'click', () => {
        helper.hideEl( recording );
        helper.hideEl( submitBtn );
        helper.hideEl( formGroup );
        helper.showEl( btnFile );
    } )

    slideToggle.addEventListener( 'click' , ( e ) => {
        let target = e.target;
        
        if( target.classList.contains( 'slide-toggle' ) ) {
            target.innerText = '>>';
            sidebar.style.display = 'none'
        } else {
            target.innerText = '<<';
            sidebar.style.display = 'initial';
            sidebar.style.display = 'block';
        }           
        target.classList.toggle( 'slide-toggle' );
        
    } )


    submitBtn.addEventListener( 'click', () => {
        let text = input.value;

        return translate.translate( 'es', text )
                        .then( res => console.log( res['data'].translations[0].translatedText ) )
    } )

    recording.addEventListener( 'click', () => {
        speech.record();
    } )

    
} )