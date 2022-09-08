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
    append(val){
        const node = new Node(val);
        if(!this.head){
            this.head = node;
        }else{
           let currentNode = this.head;
           while(currentNode.next) {
            currentNode = currentNode.next;
           }
           currentNode.next = node;
        }
    }
    delete(value) {
        if(!this.head) {
            this.head = node;
        }
        const current = this.head;
        while(current.next) {
            if(current.next.value == value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
}

module.exports = LinkedList;