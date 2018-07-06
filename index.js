const Block = require('./Block');
const Blockchain = require('./Blockchain');
const dateFormat = require('dateformat');

let blockchain = new Blockchain();
for(let i=1; i<5; i++){
    setTimeout(() => {
        blockchain.addNewBlock(new Block(i, dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT"), { from: "Shrey"+i, to: "Ashish"+i, amount: 50 - i }));        
        if(i >= 4){
            console.log(JSON.stringify(blockchain, null, 4));            
            console.log("Is chain valid(earlier): ",blockchain.isChainValid());
            console.log("Messing up the chain now !!!");
            blockchain.chain[i]["data"]["amount"] = 5000;
            console.log("Is chain valid(later): ", blockchain.isChainValid());
        }            
    },1000 * i);
}