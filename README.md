# mongoose-data-generator

Configurable MongoDB data generator that uses your mongoose schemas, including refs to other collections

[![travis-build](https://img.shields.io/travis/erics2783/mongoose-data-generator.svg)]](https://travis-ci.org/erics2783/mongoose-data-generator)

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

The assertion library is Chai. Visit http://chaijs.com/ for details.

Code coverage reporting is handled by istanbul/nyc. Visit https://github.com/istanbuljs/nyc for more info.

```bash
# run tests and get code coverage report
npm run test

# run tests without code coverage report
npm run test:no_coverage
```
