const Block = require('./Block');
const dateFormat = require('dateformat');

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];        
    }

    createGenesisBlock() {
        return new Block(0, dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT"), { from: "Ashish", to: "Shrey", amount: 100 }, "0000");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addNewBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        for(let i=1; i<this.chain.length; i++){
            let currentBlock = this.chain[i];
            let previousBlock = this.chain[i-1];

            if(currentBlock.previousHash !== previousBlock.hash)
                return false;

            if(currentBlock.hash !== currentBlock.calculateHash())
                return false;            
        }
        return true;
    }
}

module.exports = Blockchain;