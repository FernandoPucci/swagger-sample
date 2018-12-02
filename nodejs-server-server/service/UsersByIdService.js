'use strict';


/**
 * Get User by ID
 * This endpoint gets **only user equals Id** registered in the system
 *
 * id Integer ID of User to use
 * returns Object
 **/
exports.getUser = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

