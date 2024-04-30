const Category = require('../models').categories;

const getAllCategorys = async (req, res) => {
    const categorys = await Category.findAll();
    res.json(categorys);
};

async function getCategoryById(req, res) {
    const { categoryId } = req.params;
    const category = await Category.findByPk(categoryId);
    if (!category) {
        return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
}

const createCategory = async (req, res) => {
    const { category, price, stock } = req.body;
    const newCategory = await Category.create({ category, price, stock });
    res.json(newCategory);
};

const updateCategory = async (req, res) => {
    let { categoryId } = req.params;
    let category = Category.findByPk(categoryId);
    if (category) {
        let { newCategoryName, newPrice, newStock } = req.body;
        console.log(newCategoryName, newPrice, newStock);
        if (newCategoryName != undefined || newPrice != undefined || newStock != undefined) {
            await Category.update({
                category: newCategoryName || category.category,
                price: newPrice || category.price,
                stock: newStock || category.stock
            }, {
                where: {
                    category_id: categoryId
                }
            });
            res.status(200).json({ message: `Category "${categoryId}" updated successfully` });
        } else {
            res.status(404).json({ message: `Faltan nuevos datos` });
        }
    } else {
        res.status(404).json({ message: `Category not found` });
    }
}

const deleteCategory = async (req, res) => {
    let categoryId = req.params.categoryId;
    let category = await Category.findByPk(categoryId);
    if (category) {
        await Category.destroy({
            where: {
                category_id: categoryId
            }
        });
        res.status(200).json({ message: `Category "${categoryId}" deleted successfully` });
    } else {
        res.status(404).json({ message: `Category not found` });
    }
};



module.exports = {
    getAllCategorys: getAllCategorys,
    getCategoryById: getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};