import { expect } from 'chai';
import { MDGConfig } from '../src/mongoose-data-generator-config.class';

describe ('MDGConfig Class', () => {
    describe('constructor()', () => {
        it ('should return a config object with all defaults set', () => {
            const config = {
                files: [],
                models: [],
            };
            const generatorConfig = new MDGConfig(config);
            expect(generatorConfig).to.exist;
        });

        it ('should throw an error if required properties are not set', () => {
            let config = {};
            expect(() => new MDGConfig(config)).to.throw();
            config = { files: [] };
            expect(() => new MDGConfig(config)).to.throw();
            config = { models: [] };
            expect(() => new MDGConfig(config)).to.throw();
        });
    });
});
