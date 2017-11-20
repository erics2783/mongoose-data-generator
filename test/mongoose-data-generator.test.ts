import { expect } from 'chai';
import { MongooseDataGenerator } from '../src/mongoose-data-generator.class';
import { MDGConfig } from '../src/mongoose-data-generator-config.class';
import * as mongoose from 'mongoose';

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
            expect(generator).to.exist;
        });
    });

    describe('generate()', () => {

        it ('should throw useful error if file not found', () => {
            const config: MDGConfig = new MDGConfig({
                files: [
                    'does/not/exist.ts',
                ],
                models: [

                ],
            });
            const generator = new MongooseDataGenerator(config);
            expect(() => generator.generate()).to.throw(/not found/i);
            expect(() => generator.generate()).to.throw(/absolute path/i);
            expect(() => generator.generate()).to.throw(/relative to the project root/i);
            expect(() => generator.generate()).to.throw(/__dirname/i);
        });

        it('should just throw any other types of errors', () => {
            const config: MDGConfig = new MDGConfig({
                files: [
                    null,
                ],
                models: [

                ],
            });
            const generator = new MongooseDataGenerator(config);
            expect(() => generator.generate()).to.throw(TypeError);
        });

        it ('should load all models specified in config when using absolute file path', () => {
            const config: MDGConfig = new MDGConfig({
                files: [
                    __dirname + '/test-project/models/person.model.ts',
                ],
                models: [
                    'Person',
                ],
            });

            const generator = new MongooseDataGenerator(config);
            generator.generate();
            expect(() => mongoose.model('Person')).to.not.throw();
        });

        it ('should load all models specified in config when using file path relative to root', () => {
            const config: MDGConfig = new MDGConfig({
                files: [
                    'test/test-project/models/person.model.ts',
                ],
                models: [
                    'Person',
                ],
            });

            const generator = new MongooseDataGenerator(config);
            generator.generate();
            expect(() => mongoose.model('Person')).to.not.throw();
        });

        it ('should work when multiple models are defined in a single file', () => {
            const config: MDGConfig = new MDGConfig({
                files: [
                    'test/test-project/models/vehicles.model.ts',
                ],
                models: [
                    'Car',
                    'Truck',
                ],
            });

            const generator = new MongooseDataGenerator(config);
            generator.generate();
            expect(() => mongoose.model('Car')).to.not.throw();
            expect(() => mongoose.model('Truck')).to.not.throw();
        });
    });
});
