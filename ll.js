'use strict';

const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(val) {
        const node = new Node(val);
        if(!this.head){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
    }

   
}

module.exports = LinkedList;