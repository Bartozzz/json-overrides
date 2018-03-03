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
        return hasOverrides(json) && (name in json.overrides);
    }

    return "overrides" in json;
}

/**
 * Override `json` properties with name-specific ones and remove overrides
 * property. Returns `null` if `json` is not a valid object or if it doesn't
 * contain any overrides.
 *
 * @param   {Object}    json    JSON to look for overrides in
 * @param   {string}    name    Name to check overrides for
 * @return  {Object|null}
 */
export default function jsonOverrides(json: Object, name: string): Object|null {
    if (!json || typeof json !== "object" || !hasOverrides(json, name)) {
        return null;
    }

    const localCopy: Object = {...json};
    const overrides: Object = localCopy.overrides[name];

    delete localCopy.overrides;
    return {...localCopy, ...overrides};
}
