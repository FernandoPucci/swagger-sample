'use strict';


/**
 * Delete User by ID
 * This endpoint delete **only user equals Id** registered in the system
 *
 * id Integer ID of User to remove
 * no response value expected for this operation
 **/
exports.removeUser = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

