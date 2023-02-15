const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
        const categoryData = await Category.findAll({
            include: [{ model: Product }]
        });
        res.status(200).json(categoryData)
    } catch (err) {
        res.status(500).json(err)
    }
});

// fetch API targeting Category 
router.get('/:id', async (req, res) => {
    try {
        // finds item by primary key and if nothing matches ID
        const categoryData = await Category.findByPk(req.params.id, {
            include: [{ model: Product }]
        });
        if (!categoryData) {
            res.status(404).json({ message: "No category found for that id!" })
            return;
        }
        res.status(200).json(categoryData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', (req, res) => {
    // create a new category
    try {
        const categoryData = await Category.create(req.body);
        res.status(200).json(categoryData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    try {
        // finds item by primary key and if nothing matches ID
        const categoryData = await Category.update(req.params.id, {
            category_name: req.body.category_name
        });
        if (!categoryData) {
            res.status(404).json({ message: "No category found for that id!" })
            return;
        }
        res.status(200).json(categoryData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    try {
        // finds item by primary key and if nothing matches ID
        const categoryData = await Category.destroy(req.params.id);
        if (!categoryData) {
            res.status(404).json({ message: "No category found for that id!" })
            return;
        }
        res.status(200).json(categoryData)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;