const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
        const catagoryData = await Category.findAll({
            include: {
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
            }
        })
            .then(categoryData => {
                if (!categoryData) {
                    res.status(404).json({ message: 'no categories found' });
                    return;
                }
                res.json(categoryData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            });

    });
// fetch API targeting Category 
router.get('/:id', async (req, res) => {
    Category.findAll({
        include: {
            model: Product,
            attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
    })
        .then(categoryData => {
            if (!categoryData) {
                res.status(404).json({ message: 'no categories found' });
                return;
            }
            res.json(categoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
    // find one category by its `id` value
    // be sure to include its associated Products
});

router.post('/', (req, res) => {
    // create a new category
    Category.create({
        category_name: req.body.category_name
    })
        .then(dbCatData => res.json(dbCatData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Category.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbCatData => {
            if (!dbCatData) {
                res.status(404).json({ message: 'No category found with this id' });
                return;
            }
            res.json(dbCatData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCatData => {
            if (!dbCatData) {
                res.status(404).json({ message: 'No category found with that id.' });
                return;
            }
            res.json(dbCatData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;