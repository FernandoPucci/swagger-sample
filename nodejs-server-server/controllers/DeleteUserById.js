'use strict';

var utils = require('../utils/writer.js');
var DeleteUserById = require('../service/DeleteUserByIdService');

module.exports.removeUser = function removeUser (req, res, next) {
  var id = req.swagger.params['id'].value;
  DeleteUserById.removeUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
