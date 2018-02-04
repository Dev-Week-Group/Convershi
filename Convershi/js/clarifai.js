const clarifai = function() {
    const app = new Clarifai.App({
        apiKey: 'b16f6c2235774dc6b4068116715a26a6'
    } );

    function predictTextImage( file ){
        return app.models.predict(Clarifai.GENERAL_MODEL, file)
                  .then(
                    res => console.log( res ),
                    err => console.log( err )
                  )
        }

    return {
        predictTextImage
    }
}