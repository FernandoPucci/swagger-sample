'use strict';

var utils = require('../utils/writer.js');
var UsersById = require('../service/UsersByIdService');

module.exports.getUser = function getUser (req, res, next) {
  var id = req.swagger.params['id'].value;
  UsersById.getUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
