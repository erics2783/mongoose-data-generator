import { ErrorHandler } from './error-handler.class';

export class MDGConfig {
    files: string[];
    include: string[];
    modelNames: string[];
    models: string[];

    constructor(configObject: any) {
        if (!configObject.files && !configObject.include) {
            this.errorHandler.throwErr('either files property or include property is required');
        }
        if (!configObject.models) {
            this.errorHandler.throwErr('models property is required');
        }

        this.files = configObject.files;
        this.include = configObject.include;
        this.models = configObject.models;
    }

    private errorHandler: ErrorHandler = new ErrorHandler('Config Err');
}
