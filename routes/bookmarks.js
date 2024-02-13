const express = require('express')

const router = express.Router()

// Need controller functions
const {index, create, destroy} = require('../controllers/bookmarks')


// http://localhost:8000/bookmarks

// Routing

// Get all bookmarks
router.get("/", (index))

// Create a bookmark

router.post("/", create)

// Delete a bookmark

router.delete("/:id", destroy)



















module.exports = router