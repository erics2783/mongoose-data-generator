import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;

import { ErrorHandler } from '../src/error-handler.class';


describe('ErrorHandler class', () => {
    type FakeLogger = {
        name: string;
        error: (msg: string) => void;
    };
    const fakeLogger: FakeLogger = {
        name: 'Fake Logger',
        error: sinon.spy(),
    };

    describe('constructor()', () => {
        it ('should set default prefix if no prefix is passed in', () => {
            const handler = new ErrorHandler();
            expect(handler.prefix).to.exist;
        });

        it ('should set default logger if no logger is passed in', () => {
            const handler = new ErrorHandler();
            expect(handler.logger).to.exist;
        });

        it ('should return handler with specified prefix set if prefix passed in', () => {
            const handler = new ErrorHandler('da prefix');
            expect(handler.prefix).to.equal('da prefix');
        });

        it ('should return handler with specified logger set if logger passed in', () => {
            const handler = new ErrorHandler('prefix', fakeLogger);
            expect(handler.logger).to.exist;
            expect((<FakeLogger>handler.logger).name).to.equal('Fake Logger');
        });
    });

    describe('throwErr()', () => {
        const handler = new ErrorHandler();
        const undefinedMessageObj: any = {};
        it ('should throw if no message is passed', () => {
            expect(() => handler.throwErr(undefinedMessageObj.msg)).to.throw();
        });

        it ('should throw error with specified message if message is passed in', () => {
            expect(() => handler.throwErr('Test Message')).to.throw('Test Message');
        });

        it ('should throw specified with specified error type if errorType passed in ', () => {
            expect(() => handler.throwErr('Type Err Message', <typeof Error>TypeError)).to.throw(TypeError);
        });

        it ('should prepend prefix to msg', () => {
            const prefixHandler = new ErrorHandler('PREFIX!!@');
            expect(() => prefixHandler.throwErr('Msg with prefix')).to.throw('PREFIX!!@ -');
        });
    });

    describe('logErr()', () => {
        const handler = new ErrorHandler();
        const undefinedMessageObj: any = {};
        it ('should throw if no message is passed', () => {
            expect(() => handler.logErr(undefinedMessageObj.msg)).to.throw();
        });

        it ('should prepend prefix to msg', () => {
            const prefixedHandler = new ErrorHandler('PREFIX!!@', fakeLogger);
            prefixedHandler.logErr('Test Err');
            expect(fakeLogger.error).to.have.been.calledWith('PREFIX!!@ - Test Err');
        });
    });
});
