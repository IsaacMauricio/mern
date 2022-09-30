const Note = require('../models/note_model');

const getNotes = async (req, res, next) => {
    const notes = await Note.find({}).sort({ createdAt: -1 });

    return res.status(200).json(notes);
}

const getNote = async (req, res, next) => {
    const id = req.params.id;

    const note = await Note.findById(id);

    if (!note) return res.status(404);

    res.status(200).json(note);
};

const createNote = async (req, res, next) => {
    try {

        const note = await Note.create({
            title: `Hello this is my note number ${Math.random() * 10000}`,
            content: `How's it looking?`
        });

        res.status(201).json(note);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    getNote,
    getNotes,
    createNote,
}