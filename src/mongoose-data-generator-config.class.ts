import { ErrorHandler } from './error-handler.class';

export class MDGConfig {
    files: string[];
    includes: string[];

    constructor(configObject: any) {
        if (!configObject.files && !configObject.includes) {
            this.errorHandler.throwErr('either files property or includes property is required');
        }
        if (!configObject.models) {
            this.errorHandler.throwErr('models property is required');
        }
    }

    private errorHandler: ErrorHandler = new ErrorHandler('Config Err');
}
