'use strict';


/**
 * Create an User
 * Creates an User into the system
 *
 * user User User
 * returns User
 **/
exports.saveUser = function(user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Zé da Silva",
  "id" : 0,
  "email" : "ze.silva@mycorp.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an User
 * Updates an User into the system **ID field must be required**
 *
 * user User User
 * returns User
 **/
exports.updateFullUser = function(user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Zé da Silva",
  "id" : 0,
  "email" : "ze.silva@mycorp.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an User
 * Updates an User into the system **ID field must be required**
 *
 * user User User
 * returns User
 **/
exports.updateUser = function(user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Zé da Silva",
  "id" : 0,
  "email" : "ze.silva@mycorp.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

