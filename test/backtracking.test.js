import { expect } from 'chai';
import { TernaryTree } from '../Backtracking/TernaryTree.js';
import { ternaryTreePaths } from '../Backtracking/ternaryTreePaths.js';
import { findStringPermutations } from '../Backtracking/stringPermutations.js';
import { getFibonacciNumber } from '../Backtracking/fibonacci.js';
import { wordBreak } from '../Backtracking/wordBreak.js';
import { palindromePartition } from '../Backtracking/palindromePartitioning.js';

describe("Test ternary tree paths function", () => {
    const tree1 = new TernaryTree();
    tree1.root = tree1.makeTernaryTree([1, 2, '', 3, 4, '', 5, '', '', '']);

    const tree2 = new TernaryTree();
    tree2.root = tree2.makeTernaryTree([1, 2, 3, 4, '', '', 5, '', '', ''])

    const tree3 = new TernaryTree();

    it("Check tree path functionality", () => {
        expect(ternaryTreePaths(tree1.root)).to.deep.equal(["1->2", "1->3->4", "1->3->5"]);
        expect(ternaryTreePaths(tree2.root)).to.deep.equal(["1->2->3->4", "1->2->5"]);
        expect(ternaryTreePaths(tree3.root)).to.deep.equal([]);
    });
});

describe("Get all permutations of string", () => {

    const factorial = (num) => {
        if (num === 0 || num === 1) return 1;
        return num * factorial(num-1);
    }

    it("Check valid permutations", () => {
        const str1 = 'abc';
        const res1 = findStringPermutations(str1);
        expect(res1).to.have.members(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
        expect(res1.length).to.equal(factorial(str1.length));

        const str2 = '12';
        const res2 = findStringPermutations(str2);
        expect(res2).to.have.members(['12', '21'])
        expect(res2.length).to.equal(factorial(str2.length));

        const str3 = 'g';
        const res3 = findStringPermutations(str3);
        expect(res3).to.have.members(['g'])
        expect(res3.length).to.equal(factorial(str3.length));
        
    });
});

describe("Check Fibonnaci Sequence Function", () => {
    it("Test return values of fibonacci sequence", () => {
        expect(getFibonacciNumber(0)).to.equal(0);
        expect(getFibonacciNumber(1)).to.equal(1);
        expect(getFibonacciNumber(2)).to.equal(1);
        expect(getFibonacciNumber(5)).to.equal(5);
        expect(getFibonacciNumber(7)).to.equal(13);
        expect(getFibonacciNumber(10)).to.equal(55);
    });
});

describe("Check the Functionality of the Word Break Function", () => {
    it("Test when word in options", () => {
        expect(wordBreak("helloworld", ["hello", "world"])).to.equal(true);
        expect(wordBreak("helloworldhello", ["hello", "world"])).to.equal(true);
        expect(wordBreak("aaaaaaaa", ["a"])).to.equal(true);
        expect(wordBreak("hello world", ["world", " ", "hello"])).to.equal(true);
        expect(wordBreak("hello  world", ["world", " ", "hello"])).to.equal(true);
    });

    it("Test when word is not in options", () => {
        expect(wordBreak("hellowrld", ["hello", "world"])).to.equal(false);
        expect(wordBreak("helloworldhello", ["hello", "wrld"])).to.equal(false);
        expect(wordBreak("aaaaaaaa", ["ab"])).to.equal(false);
        expect(wordBreak("h", ["world", " ", "hello"])).to.equal(false);
        expect(wordBreak("codecodecode", ["codec"])).to.equal(false);
    });
});

describe("Test Palindrome Partition Functions", () => {
    it("Check the functionality", () => {
        
        const palindromePartData = [
            ["aab", [["a", "a", "b"], ["aa", "b"]]],
            ["aba", [["a", "b", "a",], ["aba"]]],
        ];

        for (const data of palindromePartData) {
            const input = data[0];
            const expected = data[1];
            expect(palindromePartition(input)).to.deep.equal(expected);
        }

    });
});