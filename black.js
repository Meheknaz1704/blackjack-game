let firstCard = 10
let secondCard = 3
let Cards = [firstCard, secondCard]
let sumCard = firstCard + secondCard;
let hasBlackjack = false
 let message = " "
 let messageEl = document.getElementById("message-el")
 let SumEl = document.getElementById("sum-el")
 let cardEl = document.getElementById("card-el")


 function start(){
    renderGame()
 }
 function renderGame(){
cardEl.textContent = "Cards: " + Cards[0] + " " + Cards[1]
 SumEl.textContent =  "Sum: " + sumCard
if(sumCard <= 20){
    message = "Do you want to draw a new card? 😐"
}
else if(sumCard === 21){
    message = "Wooow!, you've won the blackjack 🥳"
    hasBlackjack = true
}
else{
    message = "You are out from the game 😭"
}
messageEl.textContent = message
console.log(message)
 }

 function newCard(){
let card = 8
 sumCard += card
 Cards.push(card)
 console.log(Cards)
 renderGame()
 }