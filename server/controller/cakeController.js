const { Cake } = require('../models/cakeModel');

module.exports = {

  getAll: (req, res) => {
    Cake.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getOne: (req, res) => {
    const ID = req.params.id;
    Cake.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createCake: (req, res) => {
    const DATA = req.body;
    Cake.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  rateCake: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Cake.updateOne({_id:ID},{$push: {ratings: DATA}}, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  delete: (req, res) => {
    const ID = req.params.id;
    Cake.findOneAndDelete({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

}