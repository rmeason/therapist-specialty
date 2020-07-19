const db = require("../models");

// Defining methods for the providersController
module.exports = {
  findAll: function(req, res) {
    db.Provider
      .find()
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Provider
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    db.Provider
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log("ERROR")
        console.log(err)
        res.status(422).json(err)
      });
  },
  update: function(req, res) {
    db.Provider
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Provider
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};