function rollDice() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1-6

    var randomDiceImage1 = "dice" + randomNumber1 + ".png";   // dice1.png - dice6.png

    var Image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomeDiceImage2 = "dice" + randomNumber2 + ".png"; 

    var Image2 = document.querySelectorAll("img")[1].setAttribute("src", randomeDiceImage2);

    //if player 1 wins -

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins !!";
    } 
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "PLayer 2 wins !!";
    } else {
        document.querySelector("h1").innerHTML = "Draw !!";
    }

}
