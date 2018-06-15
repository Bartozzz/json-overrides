"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = jsonOverrides;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Check if the specified `json` has overrides and/or if it has custom overrides
 * for a specific `name`.
 *
 * @param   {Object}    json    JSON to look for overrides in
 * @param   {?string}   name    Name to check overrides for
 * @return  {boolean}
 */
function hasOverrides(json, name) {
  if (name) {
    return hasOverrides(json) && json.overrides.hasOwnProperty(name);
  }

  return json.hasOwnProperty("overrides");
}

/**
 * Override `json` properties with name-specific ones and remove overrides
 * property. Throws errors if `json` is not a valid object or if it doesn't
 * contain any overrides.
 *
 * @param   {Object}    json    JSON to look for overrides in
 * @param   {string}    name    Name to check overrides for
 * @throws  {TypeError}         When provided JSON in not a valid object
 * @throws  {Error}             When could not find overrides
 * @return  {Object}
 */
function jsonOverrides(json, name) {
  if (!json || (typeof json === "undefined" ? "undefined" : _typeof(json)) !== "object") {
    throw new TypeError("Expected JSON to be an object (got " + (typeof json === "undefined" ? "undefined" : _typeof(json)) + ")");
  }

  if (!hasOverrides(json, name)) {
    throw new Error("Overrides for " + name + " not found");
  }

  var overrides = json.overrides,
      rest = _objectWithoutProperties(json, ["overrides"]);

  var nameSpecific = overrides[name];

  return _extends({}, rest, nameSpecific);
}
module.exports = exports["default"];