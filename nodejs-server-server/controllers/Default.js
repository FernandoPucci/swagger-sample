'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.saveUser = function saveUser (req, res, next) {
  var user = req.swagger.params['User'].value;
  Default.saveUser(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFullUser = function updateFullUser (req, res, next) {
  var user = req.swagger.params['User'].value;
  Default.updateFullUser(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUser = function updateUser (req, res, next) {
  var user = req.swagger.params['User'].value;
  Default.updateUser(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
