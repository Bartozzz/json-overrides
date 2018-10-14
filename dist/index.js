"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = jsonOverrides;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Override `json` properties with name-specific ones and remove overrides
 * property. Throw errors if `json` is not a valid object or if it doesn't
 * contain any overrides.
 *
 * @param   {string|Overridable}  json  JSON to look for overrides in
 * @param   {string}              name  Name to check overrides for
 *
 * @throws  {TypeError}   When provided JSON in not a valid object
 * @throws  {Error}       When could not find overrides
 * @return  {Object}
 */
function jsonOverrides(json, name) {
  if (typeof json === "string") {
    try {
      json = JSON.parse(json);
    } catch (_unused) {
      throw new TypeError("String is not a valid JSON string");
    }
  }

  if (!json || _typeof(json) !== "object") {
    throw new TypeError("Expected JSON to be an object (got ".concat(_typeof(json), ")"));
  }

  if (_typeof(json.overrides) !== "object" || !(name in json.overrides)) {
    throw new Error("Overrides for ".concat(name, " not found"));
  }

  var _json = json,
      overrides = _json.overrides,
      rest = _objectWithoutProperties(_json, ["overrides"]);

  var nameSpecific = overrides[name];
  return _objectSpread({}, rest, nameSpecific);
}

module.exports = exports.default;