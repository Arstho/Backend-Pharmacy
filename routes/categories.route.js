const {
    Router
} = require("express");
const {
    categoriesController
} = require("../controllers/categories.controller");
const router = Router();

router.get("/admin/categories", categoriesController.getAllCategories);
router.get("/admin/categories/:id", categoriesController.getCategoryById);
router.post("/admin/categories", categoriesController.addCategory);
router.delete("/admin/categories/:id", categoriesController.deleteCategoryById);
router.patch("/admin/categories/:id", categoriesController.updateCategoryById);


module.exports = router;