<div align="center">
  <h1>json-overrides</h1>

[![Greenkeeper badge](https://badges.greenkeeper.io/Bartozzz/json-overrides.svg)](https://greenkeeper.io/)
[![Build Status](https://img.shields.io/travis/Bartozzz/json-overrides.svg)](https://travis-ci.org/Bartozzz/json-overrides/)
[![License](https://img.shields.io/github/license/Bartozzz/json-overrides.svg)](LICENSE)
[![NPM version](https://img.shields.io/npm/v/json-overrides.svg)](https://www.npmjs.com/package/json-overrides)
[![NPM downloads](https://img.shields.io/npm/dt/json-overrides.svg)](https://www.npmjs.com/package/json-overrides)
  <br>

**json-overrides** allows you to create various JSON objects from a main parent JSON object. It overrides JSON properties with name-specific ones and remove the `overrides` property. It returns `null` if JSON is not a valid object or if it doesn't contain any overrides.
</div>

## Installation

```bash
$ npm install json-overrides
```

## Usage

`override(object: Object, key: string): Object|null`

```javascript
import override from "json-overrides";
// or window.jsonOverrides if used outside Node.js environment

let obj = {
    a: "I'm a default value!",
    b: "I'll never change!",

    override : {
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
// => {
//     a: "I'm a default value for project A!",
//     b: "I'll never change!"
// }

override(obj, "projectB");
// => {
//     a : "I'm a default value for project B!",
//     b : "I'll never change!"
// }

override(obj, "projectC");
// => {
//     a: "I'm a default value for project C!",
//     b: "... or will I?"
// }

override(obj, "projectD");
// => null

override(123, "projectD");
// => null

override(true, "projectD");
// => null
```

## Tests

```bash
$ npm test
```
