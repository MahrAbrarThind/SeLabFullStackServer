import express from "express"
import Product from '../models/Product.js'
const router = express.Router();

// Create a new product
router.post('/create', async (req, res) => {

    

 const newProduct = new Product(req.body);
 await newProduct.save();
 res.status(201).json(newProduct);
});

// Get all products
router.get('/get', async (req, res) => {
 const products = await Product.find();
 res.json(products);
});

// Update a product
router.put('/update/:id', async (req, res) => {
 const updatedProduct = await Product.findByIdAndUpdate(req.params.id, 
req.body, { new: true });
 res.json(updatedProduct);
});

// Delete a product
router.delete('/delete/:id', async (req, res) => {
 await Product.findByIdAndDelete(req.params.id);
 res.json({ message: 'Product deleted' });
});

export default router;