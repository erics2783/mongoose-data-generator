export interface ErrorLogger {
    error: (msg: string) => void;
}

export class ErrorHandler {

    prefix: string;
    logger: ErrorLogger;

    constructor(prefix: string = '', logger: ErrorLogger = console) {
        this.prefix = prefix;
        this.logger = logger;
    }

    throwErr(msg: string, errorType: typeof Error = Error) {
        if (msg === null || msg === undefined) {
            ErrorHandler.throwMsgRequiredError();
        }
        const message = this.buildMessage(msg);
        throw new errorType(message);
    }

    logErr(msg: string) {
        if (msg === null || msg === undefined) {
            ErrorHandler.throwMsgRequiredError();
        }
        this.logger.error(this.buildMessage(msg));
    }

    private static throwMsgRequiredError() {
        throw new Error('ErrorHandler Err - msg is required');
    }

    private buildMessage(msg: string) {
        return this.prefix !== '' ? `${this.prefix} - ${msg}` : msg;
    }
}
