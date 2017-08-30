<div align="center">
  <h1>json-overrides</h1>

[![Greenkeeper badge](https://badges.greenkeeper.io/Bartozzz/json-overrides.svg)](https://greenkeeper.io/)
[![Build Status](https://img.shields.io/travis/Bartozzz/json-overrides.svg)](https://travis-ci.org/Bartozzz/json-overrides/)
[![npm version](https://img.shields.io/npm/v/json-overrides.svg)](https://www.npmjs.com/package/json-overrides)
[![npm downloads](https://img.shields.io/npm/dt/json-overrides.svg)](https://www.npmjs.com/package/json-overrides)
  <br>

Create various json files from a main parent json file.
</div>

## Installation

```bash
$ npm install json-overrides
```

## Usage

`override( object, key );`

```javascript
import override from "json-overrides";
// or window.jsonOverrides if used outside Node.js environment

let obj = {
    a : "I'm a default value!",
    b : "I'll never change!",

    overrides : {
        projectA : {
            a : "I'm a default value for project A!"
        },

        projectB : {
            a : "I'm a default value for project B!"
        },

        projectC : {
            a : "I'm a default value for project B!",
            b : "... or will I?"
        }
    }
};

override( obj, "projectA" );
// => {
//     a : "I'm a default value for project A!",
//     b : "I'll never change!"
// }

override( obj, "projectB" );
// => {
//     a : "I'm a default value for project B!",
//     b : "I'll never change!"
// }

override( obj, "projectC" );
// => {
//     a : "I'm a default value for project C!",
//     b : "... or will I?"
// }

override( obj, "projectD" );
// => null

override( { a : true }, "..." );
// => null
```

## Tests

```bash
$ npm test
```
