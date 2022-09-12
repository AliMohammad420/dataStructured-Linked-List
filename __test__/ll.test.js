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

describe("Append to the end", () =>{
    it('Append to an empty ll', () => {
        const ll = new LinkedList();
        ll.append('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
        });
        it('Append to an empty ll', () => {
            const ll = new LinkedList();
            ll.append('a');
            ll.append('b');
            ll.append('c');

            expect(ll.head.value).toEqual('a');
            expect(ll.head.next.value).toEqual('b');
            expect(ll.head.next.next.value).toEqual('c');
            expect(ll.head.next.next.next).toBeNull();
        })
})

describe("Deleting Test", () =>{
    it("Testing deleting linked list", () => {
        const ll = new LinkedList();
        ll.append('a');
        ll.append('b');
        ll.append('c');
        ll.delete('b');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('c');
        expect(ll.head.next.next).toBeNull();
    })
})

describe('Insert specific value', () => {

    test('Insert an empty linked list', () => {
        const ll = new LinkedList();
        expect(ll.insertSpecific('a', 'b')).toEqual('Is Empty!');
    })

    test('Insert specific value', () => {
        const ll = new LinkedList();
        ll.append('a');
        ll.append('b');
        ll.append('c');
        ll.append('d');
        ll.append('e');

        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('c');
        expect(ll.head.next.next.next.value).toEqual('d');
        expect(ll.head.next.next.next.next.value).toEqual('e');
        expect(ll.head.next.next.next.next.next).toBeNull();

        ll.insertSpecific('c', 'l');

        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('l');
        expect(ll.head.next.next.next.value).toEqual('c');
        expect(ll.head.next.next.next.next.value).toEqual('d');
        expect(ll.head.next.next.next.next.next.value).toEqual('e');
        expect(ll.head.next.next.next.next.next.next).toBeNull();
    })
})
