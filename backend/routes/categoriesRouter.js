const express = require('express');
const router = express.Router();
const categoryController = require("../controllers/categories.controller");



router.route("/")
    .get(categoryController.getAllCategorys)
    .post(categoryController.createCategory);

router.route("/:categoryId")
    .get(categoryController.getCategoryById)
    .put(categoryController.updateCategory)
    .delete(categoryController.deleteCategory);

module.exports = router;