import { expect } from 'chai';
import 'mocha';

describe('Testing', () => {
    it ('should run tests', () => {
        expect(1).to.equal(1);
        expect(0).to.not.equal(1);
    });
});
