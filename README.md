<div align="center">
  <h1>json-overrides</h1>

[![Greenkeeper badge](https://badges.greenkeeper.io/Bartozzz/json-overrides.svg)](https://greenkeeper.io/)
[![Build Status](https://img.shields.io/travis/Bartozzz/json-overrides.svg)](https://travis-ci.org/Bartozzz/json-overrides/)
[![License](https://img.shields.io/github/license/Bartozzz/json-overrides.svg)](LICENSE)
[![NPM version](https://img.shields.io/npm/v/json-overrides.svg)](https://www.npmjs.com/package/json-overrides)
[![NPM downloads](https://img.shields.io/npm/dt/json-overrides.svg)](https://www.npmjs.com/package/json-overrides)
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
  a: "I'm a default value!",
  b: "I'll never change!",

  overrides: {
    projectA: {
      a: "I'm a default value for project A!"
    },

    projectB: {
      a: "I'm a default value for project B!"
    },

    projectC: {
      a: "I'm a default value for project B!",
      b: "... or will I?"
    }
  }
};

override(obj, "projectA");
// {
//   a: "I'm a default value for project A!",
//   b: "I'll never change!"
// }

override(obj, "projectB");
// {
//   a: "I'm a default value for project B!",
//   b: "I'll never change!"
// }

override(obj, "projectC");
// {
//   a: "I'm a default value for project C!",
//   b: "... or will I?"
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
