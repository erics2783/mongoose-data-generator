# mongoose-data-generator

Configurable MongoDB data generator that uses your mongoose schemas, including refs to other collections

[![travis-build](https://img.shields.io/travis/erics2783/mongoose-data-generator.svg)](https://travis-ci.org/erics2783/mongoose-data-generator)
[![Coverage Status](https://img.shields.io/coveralls/github/erics2783/mongoose-data-generator/master.svg)](https://coveralls.io/github/erics2783/mongoose-data-generator?branch=master)

## Getting Started

```bash
npm install
```

## Development

This project is written in typescript. It is compiled to es5 javascript before publishing so that it can be consumed by javascript and typescript projects.
Visit https://www.typescriptlang.org/ for more info.

This project uses EditorConfig to standardize text editor configuration.
Visit http://editorconfig.org for more info.

### Building

```bash
npm run build
```

### Linting

This project uses tslint for detecting errors and inconsistencies in coding style. Visit https://palantir.github.io/tslint/ for more info

```bash
npm run lint
```

### Running Tests

This project uses Mocha as the testing framework. Visit https://mochajs.org/ for more info.

The assertion library is Chai, along with the sinon-chai library for spies/mocks. Visit http://chaijs.com/ and http://chaijs.com/plugins/sinon-chai/ for details.

Code coverage reporting is handled by istanbul/nyc. Visit https://github.com/istanbuljs/nyc for more info.

```bash
# run tests and get code coverage report
npm run test

# run tests without code coverage report
npm run test:no_coverage
```
