import override from "../dist";
import assert from "assert";

describe("json-overrides", () => {
  const obj = {
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
        a: "I'm a default value for project C!",
        b: "... or will I?",
      },
    },
  };

  const emptyObj = {
    // …
  };

  it("should override specified JSON", () => {
    const overridesForProjectA = override(obj, "projectA");
    const overridesForProjectB = override(obj, "projectB");
    const overridesForProjectC = override(obj, "projectC");

    assert.deepStrictEqual(overridesForProjectA, {
      a: "I'm a default value for project A!",
      b: "I'll never change!",
    });

    assert.deepStrictEqual(overridesForProjectB, {
      a: "I'm a default value for project B!",
      b: "I'll never change!",
    });

    assert.deepStrictEqual(overridesForProjectC, {
      a: "I'm a default value for project C!",
      b: "... or will I?",
    });

    assert.equal(false, overridesForProjectA.hasOwnProperty("overrides"));
    assert.equal(false, overridesForProjectB.hasOwnProperty("overrides"));
    assert.equal(false, overridesForProjectC.hasOwnProperty("overrides"));
  });

  it("should throw Error if JSON doesn't have overrides", () => {
    assert.throws(() => override(obj, "projectD"), Error);
    assert.throws(() => override(emptyObj, "projectD"), Error);
  });

  it("should throw TypeError if JSON is not a valid object", () => {
    assert.throws(() => override(null, "…"), TypeError);
    assert.throws(() => override(true, "…"), TypeError);
    assert.throws(() => override(1234, "…"), TypeError);
  });
});
