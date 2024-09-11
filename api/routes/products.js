const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Adjust the path as needed
const fetchUser=require('../middleware/fetchuser')
const Message=require('../models/Message')

router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get('/messages', fetchUser, async (req, res) => {
  try {
    const messages = await Message.find({ sender: req.user.id }).populate('product');
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/myproducts', fetchUser, async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.post('/message/:productId', fetchUser, async (req, res) => {
  const { productId } = req.params;
  const { message } = req.body;
  const userId = req.user.id;

  try {
    const newMessage = new Message({
      product: productId,
      sender: userId,
      message: message,
      date: new Date(),
    });

    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/', fetchUser, async (req, res) => {
  try {
    const { img, desc, cost, Location, Date, fullName, type } = req.body;

    if (!img || !desc || !cost || !Location || !fullName || !type) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newProduct = new Product({
      ...req.body,
      user: req.user.id,  // Associating the product with the logged-in user
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;