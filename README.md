# json-overrides

[![Greenkeeper badge](https://badges.greenkeeper.io/Bartozzz/json-overrides.svg)](https://greenkeeper.io/)

Create various json files from a main parent json file.

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
// => undefined

override( { a : true }, "..." );
// => undefined
```

## Tests

```bash
$ npm test
```
