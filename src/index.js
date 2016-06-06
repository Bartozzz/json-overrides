"use strict";

const _ = require( "underscore" );

/**
 * Checks if a json file has overrides, or if it has overrides for a specific
 * name.
 *
 * @param   {object}    json    - json to look for overrides in
 * @param   {string}    name    - name to check overrides for
 * @return  {bool}
 */
function hasOverrides( json, name ) {
    if ( name ) {
        return hasOverrides( json )
            && ( name in json.overrides );
    }

    return "overrides" in json;
};

/**
 * The name-specific properties will override the main json properties and the
 * `overrides` property will be removed.
 *
 * @param   {object}    json    - json to look for overrides in
 * @param   {string}    name    - name to check overrides for
 * @return  {object|undefined}
 */
function override( json, name ) {
    if ( ! hasOverrides( json, name ) )
        return undefined;

    // Clone the json, so we can have a local copy of this:
    const localCopy = _.clone( json );
    const overrides = localCopy.overrides[ name ];

    // Delete the overrides property:
    delete localCopy.overrides;

    // Return the specific package file:
    return _.extend( localCopy, overrides );
};

module.exports              = override;
module.exports.hasOverrides = hasOverrides;
