'use strict';


/**
 * Get a list of users to the list
 * This endpoint gets **all** registered users in the system
 *
 * returns List
 **/
exports.getAllUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Zé da Silva",
  "id" : 0,
  "email" : "ze.silva@mycorp.com"
}, {
  "name" : "Zé da Silva",
  "id" : 0,
  "email" : "ze.silva@mycorp.com"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

