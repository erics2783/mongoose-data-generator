import { expect } from 'chai';
import { MongooseDataGenerator } from '../src/mongoose-data-generator.class';
import { MDGConfig } from '../src/mongoose-data-generator-config.class';

describe('MongooseDataGenerator class', () => {
    describe('constructor()', () => {
        it ('should throw an error if not passed a config object', () => {
            const undefinedConfigObj: { config?: any } = {};
            expect(() => new MongooseDataGenerator(undefinedConfigObj.config)).to.throw();
        });
        it ('should return instance of MongooseDataGenerator if config is passed in', () => {
            const config: MDGConfig = new MDGConfig({
                files: [],
                models: [],
            });
            const generator = new MongooseDataGenerator(config);
        });
    });
});
