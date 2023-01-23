// create two variables, firstCard and secondCard.

// set their values to a random number between 2 - 11

// create a variable, sum, and set it to the sum of the two cards

//let firstCard = 10
//let secondCard = 12
//let sum = firstCard + secondCard // one equal = sign we want it to be

//if (sum < 21){
     // console.log("Do you want to draw a new card? 🤨")
//} else if (sum === 21){ // triple === is used to say the sum is strictly 21
     // console.log("Wohoo! You've got Blackjack! 🥳")
//} else if (sum > 21){ // or you could just use else if {} without the sum > 21
     // console.log("Your out of the game! 😕")
//}


//use the getRandomCard() to set values of firstCard and secondCard

let cards = [] 
let sum = 0
let hasBlackJack = false // to determine who won the game using true or false
let isAlive = false // create a variable called isAlive and assign it to true
let message = "" // declare a variable called message and assign its value to an empty string
let messageEl = document.getElementById("message-el") // store the message-el paragraph in a variable called messageEl
let sumEl = document.getElementById("sum-el") // store the paragraph in a variable called sumEl
// let sumEl = document.querySelector("#sum-el") // very powerful can be used for buttons/classic/id/body etc, same as document.getElementById but more powerful
let cardsEl = document.getElementById("cards-el") //store the cards paragraph in a variable called cardsEl
let player = { // when they are like this we creating an object
       name: "Lwazi",
       chip: 100 // on the last item we dont do anything
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chip


// console.log(cards)

// make getRandom() return a random number between 1 and 13
function getRandomCard(){ // create a function, getRandomCard(), that always returns the number 5
     let randomNumber = Math.floor(Math.random() * 13) + 1
     if (randomNumber > 10) {
           return 10
     } else if (randomNumber === 1){
           return 11
     } else {
           return randomNumber
     }
}

function startGame(){
      isAlive = true
      // must put this values under the start button always
      let firstCard = getRandomCard()
      let secondCard = getRandomCard()
      cards = [firstCard, secondCard]
      sum = firstCard + secondCard
      renderGame() // create a new function called startGame() that calls renderGame()
}

// write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card?"
// else if exactly 21 -> "Whohoo!" Youve got Blackjack"
// else -> "You're out of the game!"

function renderGame(){
       cardsEl.textContent = "Cards: "
      for (let i = 0; i < cards.length; i ++) { // create a for loop out of all the cards instead of just two
            cardsEl.textContent += cards[i] + " "
      }    
      sumEl.textContent = "Sum: " + sum // render the sum on the page using this format -> "Sum: 14"
      if (sum <= 20){
            message = "Do you want to draw a new card?" // reassign the message varriage to the string were logging out rather than using console.log()
      } else if (sum === 21){
            message = "You've got Blackjack"
            hasBlackJack = true	
      }else if (sum > 21){
            message = "You're out of the game!"
            isAlive = false // flip the value of isAlive in the appropriate code block
      }
      messageEl.textContent = message
   //console.log(message) // we used the message.textContent to replace the console.log feature
}

// console.log(hasBlackJack) //CASH OUT
//console.log(isAlive)
// And than log it out

 function newCard(){
       //console.log("Drawing a new card from the deck")
       // use the getRandomCard() to set the value of card
      // only allow the player to get a new card if she IS alive and does NOT have Blackjack
      if (isAlive === true && hasBlackJack === false) {
            let card = getRandomCard() // create a card variable and hard code its value to a number (2-11)
       sum += card // add the new card to the sum variable
      cards.push(card) // push the card to the cards array
      //console.log(cards)
      renderGame() // call startGame() 
      }          
 }

