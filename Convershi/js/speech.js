const speech = function() {

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.onstart = function() { 
        console.log( event );
    //   instructions.text('Voice recognition activated. Try speaking into the microphone.');
    }
      
    recognition.onspeechend = function() {
        console.log( event );
    //   instructions.text('You were quiet for a while so voice recognition turned itself off.');
    }
      
    recognition.onerror = function(event) {
        console.log( event );
        if(event.error == 'no-speech') {
            // instructions.text('No speech was detected. Try again.');  
        };
    }

    recognition.onresult = function( event ) {
      // event is a SpeechRecognitionEvent object.
      // It holds all the lines we have captured so far. 
      // We only need the current one.
      let current = event.resultIndex;

      // Get a transcript of what was said.
      let transcript = event.results[current][0].transcript;
      console.log( transcript )
      translate.translate( 'es', transcript )
               .then( res => console.log( res['data'] ) )
    }

    function record() {
        recognition.start();
    }


    return {
        record
    }
}()