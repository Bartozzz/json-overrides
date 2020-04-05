// @flow
type Overridable = {
  overrides?: {
    [override_name: string]: Object,
  },
};

/**
 * Override `json` properties with name-specific ones and remove overrides
 * property. Throw errors if `json` is not a valid JSON/object or if it doesn't
 * contain any overrides.
 *
 * @param   {string|Overridable}  json  JSON to look for overrides in
 * @param   {string}              name  Name to check overrides for
 *
 * @throws  {TypeError}   When provided JSON if argument is not valid
 * @throws  {Error}       When could not find overrides
 * @return  {Object}
 */
export default function jsonOverrides(
  json: string | Overridable,
  name: string
): Object {
  if (typeof json === "string") {
    try {
      json = (JSON.parse(json): Overridable);
    } catch {
      throw new TypeError("String is not a valid JSON string");
    }
  }

  if (!json || typeof json !== "object") {
    throw new TypeError(`Expected JSON to be an object (got ${typeof json})`);
  }

  if (typeof json.overrides !== "object" || !(name in json.overrides)) {
    throw new Error(`Overrides for ${name} not found`);
  }

  const { overrides, ...rest } = json;
  const nameSpecific = overrides[name];

  return { ...rest, ...nameSpecific };
}
