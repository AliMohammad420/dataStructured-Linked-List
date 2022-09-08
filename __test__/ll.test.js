'use strict';


const LinkedList = require('../ll.js');

describe("Testing the linkedList", () =>{
    it("Testing creating linked list", () => {
        const ll = new LinkedList();
        expect(ll).toBeDefined();
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head).toBeNull();
    })
})

describe("Insert to the beginning", () =>{
    it("Add to an empty ll", () => {
        const ll = new LinkedList();
        ll.insert('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
    });
    it("Add to an non-empty ll", () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('a');
        expect(ll.head.next.next).toBeNull();
    });
})

