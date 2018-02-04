
function hideEl( el ) {
    el.style.visibility = 'hidden';
}

function showEl( el ) {
    el.style.visibility = 'show';
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
          formGroup = document.querySelector( '.form-group' ),
          slideToggle = document.querySelector( '.slide-toggle' ),
          toggleText  = document.querySelector( '.toggle-text' ),
          toggleVoice = document.querySelector( '.toggle-voice' );


    
    toggleText.addEventListener( 'click', () => {
        hideEl( recording );
        showEl( formGroup );
        showEl( submitBtn );
    })

    toggleVoice.addEventListener( 'click', () => {
        $(".recording").css('visibility', 'visible');
        $(".recording").show();
        showEl( recording );
        hideEl( formGroup );
        hideEl( submitBtn );
    })
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