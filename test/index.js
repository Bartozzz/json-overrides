let override = require("../dist");
let assert = require("assert");

let obj = {
    a: "I'm a default value!",
    b: "I'll never change!",

    overrides: {
        projectA: {
            a: "I'm a default value for project A!",
        },

        projectB: {
            a: "I'm a default value for project B!",
        },

        projectC: {
            a: "I'm a default value for project B!",
            b: "... or will I?",
        },
    },
};

/**
 * Checks whenever two objects have the same props.
 *
 * @param  {Object} a
 * @param  {Object} b
 * @return {boolean}
 */
function equal(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    for (let i = a.length; i--;) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}

describe("json-overrides", () => {
    it("should override JSON", () => {
        assert.equal(true, equal({
            a: "I'm a default value for project A!",
            b: "I'll never change!",
        }, override(obj, "projectA")));

        assert.equal(true, equal({
            a: "I'm a default value for project B!",
            b: "I'll never change!",
        }, override(obj, "projectB")));

        assert.equal(true, equal({
            a: "I'm a default value for project C!",
            b: "... or will I?",
        }, override(obj, "projectC")));

        assert.equal(false, ("overrides" in override(obj, "projectA")));
        assert.equal(false, ("overrides" in override(obj, "projectB")));
        assert.equal(false, ("overrides" in override(obj, "projectC")));
    });

    it("should return null if JSON cannot be overrided", () => {
        assert.equal(null, override(obj, "projectD"));
        assert.equal(null, override({a: true}, "projectD"));
    });
});
