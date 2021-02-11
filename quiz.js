class Quiz {
     constructor (){
     }

     getState (){
        var gameStateref = database.ref("gameState")
        gameStateref.on("value",function(data){
            gameState = data.val()
        })
    }
     
     
    update(state){
        database.ref("/").update({
            gameState: state
        })
        }

        async start(){
            if (gameState === 0){
                player = new Player()
                var playerCountRef = await database.ref ("contestantCount").once ("value")
                if (playerCountRef.exists()){
                    contestantCount = playerCountRef.val ()
                    player.getCount()
                }
                form = new Form()
                form.display()
            }
            
        }

    play (){
        form.hide()
        text ("Result Of The Quiz:-", 340, 350)
    }    
}