'use strict';

const Node = require('../node.js');

describe('Testing node class', () => {
    it('Testing creating a new Node', () =>{
    const val ='ali';
    const node = new Node(val);
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toEqual('ali');
    expect(node.next).toBeNull();
    })
})