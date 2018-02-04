$(document).ready(function(){
    $(".slide-toggle").click(function(){
        $("#sidebar").toggle();
    });

});


$('.slide-toggle').click(function(){
	var $this = $(this);
	$this.toggleClass('.slide-toggle');
	if($this.hasClass('.slide-toggle')){
		$this.text('>>');			
	} else {
		$this.text('<<');
	}
});

$(document).ready(function(){
    $(".toggle-text").click(function(){
        $(".recording").hide();
        $(".btn-file").hide();
        $(".form-group").show();
        $(".submit-btn").show();
    });
});

$(document).ready(function(){
    $(".toggle-picture").click(function(){
    	$(".btn-file").css('visibility', 'visible');
        $(".recording").hide();
        $(".submit-btn").hide();
        $(".form-group").hide();
        $(".btn-file").show();
    });
});

$(document).ready(function(){
    $(".toggle-voice").click(function(){
    	$(".recording").css('visibility', 'visible');
        $(".recording").show();
        $(".form-group").hide();
        $(".submit-btn").hide();
        $(".btn-file").hide();
    });
});

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