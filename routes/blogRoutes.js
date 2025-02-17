// blogRoutes.js
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');

router.post('/', protect, createBlog);
router.get('/', getBlogs);
router.put('/:id', protect, updateBlog);
router.delete('/:id', protect, deleteBlog);

module.exports = router;
