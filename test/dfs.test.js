import { expect } from 'chai';
import { Tree } from '../Depth-First-Search-JS/Tree.js';
import { maxDepthOfTree } from '../Depth-First-Search-JS/maxDepthOfTree.js';
import { isBalancedTree } from '../Depth-First-Search-JS/balancedTree.js';
import { BinaryTree } from '../Depth-First-Search-JS/BinaryTree.js';

describe("Depth First Search Methods", () => {

    let tree1 = new Tree();
    tree1.makeTree(['A', 'B', 'C', '', '', 'D', 'E', '', '', 'F', '', '', 'G', '', 'H', '', '']);

    it("makes a pre-order tree", () => {
        const tree = new Tree();
        tree.makeTree(['A', 'B', 'C', '', '', 'D', 'E', '', '', 'F', '', '', 'G', '', 'H', '', '']);
        const preOrderPath = tree.preOrderTrav();
        expect(preOrderPath).deep.to.equal(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
    });

    it("returns a pre-order path of a tree", () => {
        expect(tree1.preOrderTrav()).deep.to.equal(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
    });

    it("returns a in-order path of a tree", () => {
        expect(tree1.inOrderTrav()).deep.to.equal(['C', 'B', 'E', 'D', 'F', 'A', 'G', 'H']);
    });

    it("returns a post-order path of a tree", () => {
        expect(tree1.postOrderTrav()).deep.to.equal(['C', 'E', 'F', 'D', 'B', 'H', 'G', 'A']);
    });

    it("returns back a found node if available in tree", () => {
        expect(tree1.depthFirstSearch(tree1.root, 'A')?.val).to.equal('A');
        expect(tree1.depthFirstSearch(tree1.root, 'G')?.val).to.equal('G');
        expect(tree1.depthFirstSearch(tree1.root, 'Z')?.val).to.equal(undefined);
    });
});

describe("Max Depth of Tree", () => {
    let tree1 = new Tree();
    tree1.makeTree(['A', 'B', 'C', '', '', 'D', 'E', '', '', 'F', '', '', 'G', '', 'H', '', '']);
    
    let tree2 = new Tree();
    tree2.makeTree([1, 2, 3, 4, 5, 6, '', '', '', '', '', '', '',])

    let tree3 = new Tree();
    tree3.makeTree([1, '', ''])

    let tree4 = new Tree();
    tree4.makeTree([])

    it("returns the maximum depth of a tree", () => {
        expect(maxDepthOfTree(tree1.root)).to.equal(4);
        expect(maxDepthOfTree(tree2.root)).to.equal(6);
        expect(maxDepthOfTree(tree3.root)).to.equal(1);
        expect(maxDepthOfTree(tree4.root)).to.equal(0);
    });
})

describe("Nodes Visible in a Tree", () => {
    let tree1 = new Tree();
    tree1.makeTree([5, 4, 3, '', '', 8, '', '', 6, '', '']);
    
    let tree2 = new Tree();
    tree2.makeTree([1, 2, 3, 4, 5, 6, '', '', '', '', '', '', '',]);

    let tree3 = new Tree();
    tree3.makeTree([1, '', '']);

    it("returns the maximum depth of a tree", () => {
        expect(maxDepthOfTree(tree1.root)).to.equal(3);
        expect(maxDepthOfTree(tree2.root)).to.equal(6);
        expect(maxDepthOfTree(tree3.root)).to.equal(1);
    });
});

describe("Is Tree Balanced", () => {
    let tree1 = new Tree();
    tree1.makeTree([1, 2, 4, '', 7, '', '', 5, '', '', 3, '', 6, '', '']);

    let tree2 = new Tree();
    tree2.makeTree([1, 2, 3, 4, 5, 6, '', '', '', '', '', '', '',]);

    it("returns if a tree is balanced or not", () => {
        expect(isBalancedTree(tree1.root)).to.equal(true);
        expect(isBalancedTree(tree2.root)).to.equal(false);
    })
});

describe("Binary Search Tree Methods", () => {
    const bt1 = new BinaryTree();
    const nodes1 = [8, 3, 10, 1, 6, 4];
    nodes1.forEach((node) => bt1.insert(node));

    it("returns the value found", () => {
        expect(bt1.search(3).val).to.equal(3);
        expect(bt1.search(4).val).to.equal(4);
        expect(bt1.search(7)).to.equal(null);
    });

});