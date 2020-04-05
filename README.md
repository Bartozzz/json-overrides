<div align="center">
  <h1>json-overrides</h1>

[![Default CI/CD](https://github.com/Bartozzz/json-overrides/workflows/Default%20CI/CD/badge.svg)](https://github.com/Bartozzz/json-overrides/actions)
[![Known Vulnerabilities](https://snyk.io/test/github/Bartozzz/json-overrides/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Bartozzz/json-overrides?targetFile=package.json)
[![npm package size](https://img.badgesize.io/Bartozzz/json-overrides/master/dist/index.js?compression=gzip)](https://www.npmjs.com/package/json-overrides)
[![npm version](https://img.shields.io/npm/v/json-overrides.svg)](https://www.npmjs.com/package/json-overrides)
[![npm dependency Status](https://david-dm.org/Bartozzz/json-overrides.svg)](https://www.npmjs.com/package/json-overrides)
[![npm downloads](https://img.shields.io/npm/dt/json-overrides.svg)](https://www.npmjs.com/package/json-overrides)
<br>

**json-overrides** creates name-specific manifests from a plain object. Overrides object properties with name-specific ones and removes the overrides property.

</div>

## Installation

```bash
$ npm install json-overrides
```

## Usage

```
override(json: string | Overridable, name: string): Object
```

```javascript
import override from "json-overrides";

let obj = {
  a: "Default a value",
  b: "Default b value",

  overrides: {
    projectA: {
      a: "a value for projectA",
    },

    projectB: {
      a: "a value for projectB",
    },

    projectC: {
      a: "a value for projectC",
      b: "b value for projectC",
    },
  },
};

override(obj, "projectA");
// {
//   a: "a value for projectA",
//   b: "Default b value"
// }

override(obj, "projectB");
// {
//   a: "a value for projectB",
//   b: "Default b value"
// }

override(obj, "projectC");
// {
//   a: "a value for projectC",
//   b: "b value for projectC"
// }

override(obj, "projectD");
// Error: Overrides for projectD not found

override(123, "projectD");
// TypeError: Expected JSON to be an object (got number)

override(true, "projectD");
// TypeError: Expected JSON to be an object (got boolean)
```

> **Note:** you can pass valid serialized objects as argument, e.g. `override(JSON.stringify(object), key");`.

## Tests

```bash
$ npm test
```
