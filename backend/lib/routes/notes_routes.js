const express = require('express');
const { getNote, getNotes, createNote } = require('../controllers/notes_controller');

const router = express.Router();

router.get('/notes', getNotes);
router.get('/notes/:id', getNote);
router.post('/notes', createNote);

module.exports = router;