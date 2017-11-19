import { expect } from 'chai';
import 'mocha';
import * as index from '../src/index';

describe('Testing', () => {
    it ('should run tests', () => {
        expect(1).to.equal(1);
        expect(0).to.not.equal(1);
    });
});

describe('index', () => {
    describe('coverallsTest2()', () => {
        it ('should return hello coveralls world', () => {
            expect(index.coverallsTest2()).to.equal('hello coveralls world');
        });
    });
});
