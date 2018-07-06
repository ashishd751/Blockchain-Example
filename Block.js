var SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, timestamp, data, previousHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.previousHash = previousHash || "0000";
        this.data = data;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.timestamp + JSON.stringify(this.data), + this.previousHash).toString();
    }
}

module.exports = Block;

 