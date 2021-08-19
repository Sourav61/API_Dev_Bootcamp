"use strict";

var mongoose = require("mongoose");

var connectToDB = function connectToDB() {
  return regeneratorRuntime.async(function connectToDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = connectToDB;