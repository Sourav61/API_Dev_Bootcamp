"use strict";

require("dotenv").config();

var express = require("express");

var connectToDB = require("./connection.js");

var userModel = require("./user");

var app = express(); //configuration

app.use(express.json()); // route:       /
// description: To get all user
// paramter:    none

app.get("/", function _callee(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(userModel.find());

        case 3:
          user = _context.sent;
          return _context.abrupt("return", res.json({
            user: user
          }));

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            error: _context.t0.message
          }));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // route:       /user/type/:type
// description: To get all user based on type
// paramter:    type

app.get("/user/type/:type", function _callee2(req, res) {
  var type, user;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          type = req.params.type;
          _context2.next = 4;
          return regeneratorRuntime.awrap(userModel.find({
            userType: type
          }));

        case 4:
          user = _context2.sent;

          if (user) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.json({
            message: "No User Found"
          }));

        case 7:
          return _context2.abrupt("return", res.json({
            user: user
          }));

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            error: _context2.t0.message
          }));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
}); // app.post("/user/:id", (req, res) => {
//     return res.json(req.params);
// });
// route:       /user/:id
// description: To get all user based on id
// paramter:    _id

app.get("/user/:_id", function _callee3(req, res) {
  var _id, user;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _id = req.params._id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(userModel.findById(_id));

        case 4:
          user = _context3.sent;

          if (user) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.json({
            message: "No User Found"
          }));

        case 7:
          return _context3.abrupt("return", res.json({
            user: user
          }));

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            error: _context3.t0.message
          }));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
}); // route:       /user/new
// description: To add new user
// paramter:    none
//request body: user object

app.post("/user/new", function _callee4(req, res) {
  var newUser;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          newUser = req.body.newUser;
          _context4.next = 4;
          return regeneratorRuntime.awrap(userModel.create(newUser));

        case 4:
          return _context4.abrupt("return", res.json({
            message: "User Created"
          }));

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            error: _context4.t0.message
          }));

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // route:       /user/update/:_id
// description: To add new user
// paramter:    _id
//request body: user object

app.put("/user/update/:_id", function _callee5(req, res) {
  var _id, userData, updateUser;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _id = req.params._id;
          userData = req.body.userData;
          _context5.next = 5;
          return regeneratorRuntime.awrap(userModel.findByIdAndUpdate(_id, {
            $set: userData
          }, {
            "new": true
          }));

        case 5:
          updateUser = _context5.sent;
          return _context5.abrupt("return", res.json({
            user: updateUser
          }));

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            error: _context5.t0.message
          }));

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); // route:       /user/delete/:_id
// description: To delete user
// paramter:    _id
//request body: none

app["delete"]("/user/delete/:_id", function _callee6(req, res) {
  var _id;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _id = req.params._id;
          _context6.next = 4;
          return regeneratorRuntime.awrap(userModel.findByIdAndDelete(_id));

        case 4:
          return _context6.abrupt("return", res.json({
            message: "User Deleted!"
          }));

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).json({
            error: _context6.t0.message
          }));

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // route:       /user/delete/type/:userType
// description: To delete all user of a specific type
// paramter:    _id
//request body: none

app["delete"]("/user/delete/type/:userType", function _callee7(req, res) {
  var userType;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          userType = req.params.userType;
          _context7.next = 4;
          return regeneratorRuntime.awrap(userModel.findOneAndDelete({
            userType: userType
          }));

        case 4:
          return _context7.abrupt("return", res.json({
            message: "" + userType + " " + "Users Deleted"
          }));

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(500).json({
            error: _context7.t0.message
          }));

        case 10:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
app.listen(3006, function () {
  return connectToDB().then(function (data) {
    return console.log("Server is running!!");
  })["catch"](function (error) {
    return console.log(error);
  });
});