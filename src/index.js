import _ from "underscore";

/**
 * Checks if a json file has overrides, or if it has overrides for a specific
 * name.
 *
 * @param   {object}    json    JSON to look for overrides in
 * @param   {string}    name    Name to check overrides for
 * @return  {bool}
 * @access  private
 */
function hasOverrides( json, name ) {
    if ( name ) {
        return hasOverrides( json ) && ( name in json.overrides );
    }

    return "overrides" in json;
};

/**
 * Name-specific properties will override parent JSON properties and `overrides`
 * property will be removed.
 *
 * @param   {object}    json    JSON to look for overrides in
 * @param   {string}    name    Name to check overrides for
 * @return  {object|null}
 * @export  {function}
 * @access  public
 */
export default ( json, name ) => {
    if ( ! hasOverrides( json, name ) )
        return null;

    // Clone the json, so we can have a local copy of it:
    const localCopy = _.clone( json );
    const overrides = localCopy.overrides[ name ];

    // Delete the overrides property:
    delete localCopy.overrides;

    // Return the specific package file:
    return _.extend( localCopy, overrides );
};
