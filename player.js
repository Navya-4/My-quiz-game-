class Player {
     constructor (){
        
        this.index = null;
        this.name = null;
        this.answer = 0;

     }

     getCount (){
        var playerCountref = database.ref("contestantCount")
        playerCountref.on("value", (data)=> {
            contestantCount = data.val()
        })

    }
    updateCount (count){
        database.ref("/").update({
            contestantCount: count
        })

    }
    update(){
        var playerIndex = "players/player"+this.index;
                database.ref (playerIndex).set({
            name: this.name, 
            answer: this.answer            
        })
    }

    static getPlayerInfo(){
        var playerInfo = database.ref("players")
        playerInfo.on("value", (data)=> {
            allPlayers = data.val()
        })

    }


}