

document.addEventListener( 'DOMContentLoaded', () => {

    // ===== cache DOM ===== //
    const select1 = document.querySelector( '#inputGroupSelect01' ),
          select2 = document.querySelector( '#inputGroupSelect02' ),
          input   = document.querySelector( '#usr' ),
          content = document.querySelector( '#content' ),
          recording = document.querySelector( '.recording' ),
          submitBtn = document.querySelector( '.submit-btn' );


    submitBtn.addEventListener( 'click', () => {
        let text = input.value;

        return translate.translate( 'es', text )
                        .then( res => console.log( res['data'].translations[0].translatedText ) )
    } )

    recording.addEventListener( 'click', () => {
        speech.record();
    } )

    
} )