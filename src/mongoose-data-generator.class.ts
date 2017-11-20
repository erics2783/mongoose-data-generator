import { MDGConfig } from './mongoose-data-generator-config.class';
import { ErrorHandler } from './error-handler.class';
import * as mongoose from 'mongoose';
import * as path from 'path';

export class MongooseDataGenerator {
    config: MDGConfig;

    constructor(config: MDGConfig) {
        if (config === null || config === undefined) {
            this.errorHandler.throwErr('Config is required');
        }
        this.config = config;
    }

    generate() {
        this.importModelFiles();
        this.loadModels();
    }

    private errorHandler: ErrorHandler =  new ErrorHandler('Generator Err');
    private models: mongoose.Model<any>[];

    private importModelFiles() {
        const cwd = process.cwd();
        let currFile: string = '';
        try {
            this.config.files.forEach((file: string) => {
                if (path.isAbsolute(file)) {
                    currFile = file;
                    require(currFile);
                } else {
                    currFile = path.join(cwd, file);
                    require(currFile);
                }
            });
        } catch (err) {
            if (err.message.indexOf('Cannot find module') > -1) {
                this.errorHandler.throwErr(
                    `File "${currFile}" not found. File path should be an absolute path (try using __dirname) or be ` +
                    `relative to the project root`);
            } else {
                throw err;
            }
        }
    }

    private loadModels() {
        this.models = this.config.models.map((model: string) => mongoose.model(model));
    }
}
