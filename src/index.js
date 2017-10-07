// @flow

/**
 * Check if a JSON file has overrides or if it has overrides for a specific
 * name.
 *
 * @param   {Object}    json    JSON to look for overrides in
 * @param   {string}    name    Name to check overrides for
 * @return  {bool}
 */
function hasOverrides(json: Object, name: ?string): boolean {
    if (name) {
        return hasOverrides(json) && (name in json.overrides);
    }

    return "overrides" in json;
}

/**
 * Override parent JSON properties with name-specific ones and removes overrides
 * property.
 *
 * @param   {Object}    json    JSON to look for overrides in
 * @param   {string}    name    Name to check overrides for
 * @return  {object|null}
 */
export default function jsonOverrides(json: Object, name: string): Object|null {
    if (!hasOverrides(json, name)) {
        return null;
    }

    // Clone the json, so we can have a local copy of it:
    const localCopy: Object = {...json};
    const overrides: Object = localCopy.overrides[name];

    // Delete the overrides property:
    delete localCopy.overrides;

    // Return the specific package file:
    return {...localCopy, ...overrides};
}
