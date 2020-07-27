const NeDB = require('nedb');
const path = require('path');

module.exports = function (app) {
  const dbPath = app.get('nedb');
  const Model = new NeDB({
    filename: path.join(dbPath, 'contacts.db'),
    autoload: true
  });

  return Model;
};

/*  tutorial example how to use with mongoose
"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-email");

const contactsSchema = new Schema({
  name: {
    first: { type: String, required: [true, "First Name is required"] },
    last: { type: String, required: false }
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: [true, "Email is required"]
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
    validate: {
      validator: function(v) {
        return /^\+(?:[0-9] ?){6,14}[0-9]$/.test(v);
      },
      message: "{VALUE} is not a valid international phone number!"
    }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const contactsModel = mongoose.model("contacts", contactsSchema);

module.exports = contactsModel;
*/