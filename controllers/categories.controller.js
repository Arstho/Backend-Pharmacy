const Category = require("../models/Category.model")

module.exports.categoriesController = {
  getAllCategories: async (req, res) => {
    try {
      const getCategories = await Category.find({});
      return res.json(getCategories)
    } catch (error) {
      console.log(error.message)
    }
  },

  getCategoryById: async (req, res) => {
    try {
      const getCategory = await Category.find(req.params.id);
      return res.json(getCategory)
    } catch (error) {
      console.log(error.message)
    }
  },

  addCategory: async (req, res) => {
    try {
      const addCategory = await Category.create({
        name: req.body.name
      });
      return res.json(addCategory)
    } catch (error) {
      console.log(error.message);
    }
  },

  deleteCategoryById: async (req, res) => {
    try {
      const deleteCategoryById = await Category.findByIdAndDelete(req.params.id)
      return res.json(deleteCategoryById)
    } catch (error) {
      console.log(error.message)
    }
  },

  updateCategoryById: async (req, res) => {
    try {
      const update = await Category.findByIdAndDelete(req.params.id, ({
        name: req.body.name
      }))
      return res.json(update)
    } catch (error) {
      console.log(error.message)
    }
  },
};