let winGames = 70
let lostGames = 10
let gamePoints = playerLevel (winGames, lostGames)
let classification = rankingLevel(gamePoints)

console.log ("The Hero has " + winGames + " victories, and is at level " + classification) 


function playerLevel(winGames, lostGames){
    let rankingGame = winGames - lostGames
    return rankingGame
}

function rankingLevel (classification){
    

    switch (true){

        case classification < 10: 
            return "Iron";
            break;

        case classification >= 11 && classification <= 20:
            return "Broze";
            break;

        case classification >= 21 && classification <= 50:
            return "Silver";
            break;

        case classification >= 51 && classification <= 80:
            return "Gold";
            break;
        
         case classification >= 81 && classification <= 90:
            return "Diamond";
            break;

        case classification >= 91 && classification <= 10:
            return "Legendary";
            break;

        case classification <= 101:
            return "Immortal";
            break;

    }
}