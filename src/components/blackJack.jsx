import React from "react";
import background from "./background.jpg";
let message="";
let hasBlacJack=false;
let isAlive=true;


function BlackJack(){
  console.log(isAlive)
  let firstCard= GetRandomCard()
  let secondCard= GetRandomCard()
  let cards=[firstCard,secondCard]
  let sum=firstCard+secondCard;
  
  function StartGame(){

  
    // let playerName="Asad";
    // let price=145;
    // putting these in an object
    let player={
      name:"Asad",
      price:145
    }
    let player_el=document.getElementById('player-el')
    player_el.textContent=player.name+" $"+player.price
  

   RenderGame();
  }
   function RenderGame(){
    
    
     
     if(sum<=29){
     
      message=(" Do you want to draw a new card?")
     }else if(sum===30){
      message="You've got Blackjack!"
      hasBlacJack=true
      // console.log(hasBlacJack)
     }else{
    message="You're out of the game!"
    isAlive=false;
    console.log(isAlive)
     }
     let element=document.getElementById('message-el')
     element.textContent=message;
     console.log(element)
     let sum_el=document.querySelector("#sum-el")
     sum_el.textContent="sum: "+sum;
     console.log(sum_el.textContent);
      
  let card_el=document.getElementById('cards');
  card_el.textContent="cards: ";
     for(let i=0;i<cards.length;i++){
      card_el.textContent+=cards[i]+" ";
      console.log(card_el.textContent)
     }
   }
   function NewCard(){
     
     if(isAlive===true && hasBlacJack===false){
      let NewCard=GetRandomCard();
      sum+=NewCard;
      cards.push(NewCard);
      console.log(cards)
      StartGame();

     }else if(isAlive===false){
      alert('You cannot draw more cards you lost the game')
     }else if(hasBlacJack===true){
      alert("you cannot draw a card you got a blackJack")
     }
  
    

    console.log("drawing a new Card from the deck");
   }
   function GetRandomCard(){
    let RandomNumber=Math.random()*13
    let floor= Math.floor(RandomNumber)+1
    if(floor===1){
      floor=11;
    }else if(floor===11||floor===12||floor===13){
          floor=10
    }
     return floor;
   }
 
return (
   <>
   <div src={background} style={{background:"#013f32",height:"100vh",position:"absolute",width:"100%"}}>
   <h1 >Black</h1>
        <p id="message-el">Want to play a round?</p>
        <p id="cards" className="card">Cards:</p>
        <p id="sum-el" className="sum">sum:</p>
        <div className="btn-div">
        <button onClick={StartGame} className="btn">Start Game</button>
         <button onClick={NewCard} className="btn">New Card</button>
         <p id="player-el"></p>
         </div>
   </div>
    
   </>
);
}
export default  BlackJack;