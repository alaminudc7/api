const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// POST route to create a new form entry
router.post('/submit', async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json(newForm);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to fetch all form entries
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to fetch a single form entry by certificateno
router.get('/:certificateno', async (req, res) => {
  try {
    const form = await Form.findOne({ certificateno: req.params.certificateno });
    if (form) {
      res.json(form);
    } else {
      res.status(404).json({ message: 'Form not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT route to update a form entry by certificateno
router.put('/:certificateno', async (req, res) => {
  try {
    const form = await Form.findOneAndUpdate(
      { certificateno: req.params.certificateno },
      req.body,
      { new: true }
    );
    if (form) {
      res.json(form);
    } else {
      res.status(404).json({ message: 'Form not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE route to delete a form entry by certificateno
router.delete('/:certificateno', async (req, res) => {
  try {
    const form = await Form.findOneAndDelete({ certificateno: req.params.certificateno });
    if (form) {
      res.json({ message: 'Form deleted successfully' });
    } else {
      res.status(404).json({ message: 'Form not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/text', (req, res) => {
  res.send('Submit route');
});

module.exports = router;
