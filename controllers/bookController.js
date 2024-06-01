const Book = require('../models/bookModel');

// @desc    Get all books
// @route   GET /api/books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get single book
// @route   GET /api/books/:id
exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create a new book
// @route   POST /api/books
exports.createBook = async (req, res) => {
  const { name, img, summary } = req.body;
  try {
    const newBook = new Book({ name, img, summary });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update a book
// @route   PUT /api/books/:id
exports.updateBook = async (req, res) => {
  const { name, img, summary } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, { name, img, summary }, { new: true });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a book
// @route   DELETE /api/books/:id
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
