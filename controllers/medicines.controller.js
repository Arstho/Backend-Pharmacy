const Medicine = require("../models/Medicine.model");
const User = require("../models/User.model")

module.exports.medicinesController = {
  getAllMedicines: async (req, res) => {
    try {
      const getMedicines = await Medicine.find({}).populate({
        path: 'categoryId',
        select: 'name'
      });
      return res.json(getMedicines)
    } catch (error) {
      console.log(error.message)
    }
  },

  getMedicineById: async (req, res) => {
    try {
      const getCategory = await Medicine.findById(req.params.id).populate({
        path: 'categoryId',
        select: 'name'
      });
      return res.json(getCategory)
    } catch (error) {
      console.log(error.message)
    }
  },

  addMedicine: async (req, res) => {
    try {
      const addMedicine = await Medicine.create({
        name: req.body.name,
        price: req.body.price,
        medRecipe: req.body.medRecipe,
        categoryId: req.body.categoryId,
      });
      return res.json(addMedicine)
    } catch (error) {
      console.log(error.message);
    }
  },

  deleteMedicineById: async (req, res) => {
    try {
      const deleteMedicineById = await Medicine.findByIdAndDelete(req.params.id)
      return res.json(deleteMedicineById)
    } catch (error) {
      console.log(error.message)
    }
  },

  updateMedicineById: async (req, res) => {
    try {
      const update = await Medicine.findByIdAndDelete(req.params.id, ({
        name: req.body.name
      }))
      return res.json(update)
    } catch (error) {
      console.log(error.message)
    }
  },


  getAllMedicinesU: async (req, res) => {
    try {
      const getMedicines = await Medicine.find({}).populate({
        path: "categoryId",
        select: "name",
        strictPopulate: false
      });
      return res.json(getMedicines)
    } catch (error) {
      console.log(error.message)
    }
  },

  getMedicineByIdU: async (req, res) => {
    try {
      const getMedicinesByIdU = await Medicine.findById(req.params.id).populate({
        path: 'categoryId',
        select: "name",
        strictPopulate: false
      });
      return res.json(getMedicinesByIdU)
    } catch (error) {
      console.log(error.message)
    }
  },
};