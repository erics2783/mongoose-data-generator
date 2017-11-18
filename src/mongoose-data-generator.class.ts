import { MDGConfig } from './mongoose-data-generator-config.class';
import { ErrorHandler } from './error-handler.class';

export class MongooseDataGenerator {
    constructor(config: MDGConfig) {
        if (config === null || config === undefined) {
            this.errorHandler.throwErr('Config is required');
        }
    }

    private errorHandler: ErrorHandler =  new ErrorHandler('Generator Err');
}
