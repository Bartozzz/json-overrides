// @flow

/**
 * Check if the specified `json` has overrides and/or if it has custom overrides
 * for a specific `name`.
 *
 * @param   {Object}    json    JSON to look for overrides in
 * @param   {?string}   name    Name to check overrides for
 * @return  {boolean}
 */
function hasOverrides(json: Object, name: ?string): boolean {
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
export default function jsonOverrides(json: Object, name: string): * {
  if (!json || typeof json !== "object") {
    throw new TypeError(`Expected JSON to be an object (got ${typeof json})`);
  }

  if (!hasOverrides(json, name)) {
    throw new Error(`Overrides for ${name} not found`);
  }

  const {overrides, ...rest} = json;
  const nameSpecific: Object = overrides[name];

  return {...rest, ...nameSpecific};
}
