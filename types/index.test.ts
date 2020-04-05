import override from "json-overrides";

// $ExpectType object
override("{ 'test': 1 }", "name");
// $ExpectType object
override({ test: 1 }, "name");
// $ExpectError
override(1, "name");
// $ExpectError
override(true, "name");
