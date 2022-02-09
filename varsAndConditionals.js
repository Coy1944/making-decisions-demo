/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between eowyn and
    king of Angmar.
*/ 


let eowynAttack = 50;
let witchKingAttack = 45;

if (eowynAttack > witchKingAttack) {
    console.log("Eowyn is Stonger.");
} else if (witchKingAttack > eowynAttack){
    console.log("Witch King is stronger");
} else if (eowynAttack === witchKingAttack){
    console.log ("They are the same strength");
};

let eowynHeath = 100;
let eowynDefense =0;

if(eowynHealth + eowynDefense <= witchKingAttack) {
    console.log("She dead");
}else {
    eowynHeath = eowynHeath - witchKingAttack;
    console.log(`She is down to ${eowynHealth}.`);
}

let coinLandsHeads = false;

if(coinLandsHeads === true) {
    console.log ("Which King gets to run away");
 } else {
     console.log("witch King got stabbed in the face.");
 };

 for(let i = 0; i < 5; i++){
     if(eowynHeath > 0) {
     eowynHeath = eowynHeath = witchKingAttack;
     console.log (`Eowyn has ${eowynHeath} left.`);
     } else {
         console.log( `Eowyn dead `);
     };
 };

 while (eowynHeath > 0) {
     eowynHeath -= witchKingAttack;
     console.log (`Eowyn had ${eowynHeath} left`);
     if(eowynHeath <= 0) {
         console.log ("Eowyn has been slain");
     };

     
 };
