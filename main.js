let player = {
    name: "Kerem",
    chips: 137,
    
 }
 let cards= [] // array - ordered list of items
 let sum = 0
 let hasBlackJack = false
 let isAlive = false
 let messagE = "" 
 let messageEl = document.getElementById("blk-p")
 let sumeEl = document.querySelector("#blk-sum") // or (".blk-sum") if I have class 
 let cardsEl = document.querySelector(".blk-cards")
 let playerEl = document.querySelector(".blk-player")
 playerEl.textContent = player.name + " : $" + player.chips
 
 function getRAndomCard(){
 
    let randomNu = Math.floor(Math.random()*13+1)
    if (randomNu>10){
       return 11
    }else if(randomNu==1){
       return 10
    }else{
       return randomNu
    }
      
 }
 console.log(getRAndomCard())
 
 function startGame(){
    isAlive = true
    // Generate two random numbers
    let firstCard = getRAndomCard()
    let secondCard = getRAndomCard()
    // Re-assign the cards and sum variables so that the game can start
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
    
 }
 
 function renderGame(){
 
    cardsEl.textContent = "Cards : "
    for (let i=0; i<cards.length ; i++){
       cardsEl.textContent+=cards[i] + " - "
    }
 
    sumeEl.innerText = "Sum :" + " " + sum
 
    if(sum <= 20 ){
       messagE= "Do you want to draw a new card? "
       
    }else if ( sum === 21){
       messagE = "You've got Blackjack!"
      
       hasBlackJack=true
    }else  {
       messagE = "You're out of the game!"
    
       isAlive = false
    }
 
    messageEl.textContent=messagE
    
 }
 function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT has Blackjack
    if(isAlive===true && hasBlackJack === false){
       let carD = getRAndomCard()
       sum += carD  
       cards.push(carD)
       console.log(cards)
       renderGame()
    }
    
 } 
 