const CallBell = require('../models/callbell.model');

    module.exports = {
    getCallBells: (req, res) => {
        CallBell.find({})
        .then((allCallBells) => {
            console.log(allCallBells);
            res.json(allCallBells);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with findAll', error: err.errors }),
        );
    },
    createCallBell: (req, res) => {
        console.log(req.body);
        CallBell.create(req.body)
        .then((newCallBell) => {
            console.log(newCallBell);
            res.json(newCallBell);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with create', error: err.errors }),
        );
    },
    getCallBellById: (req, res) => {
        CallBell.findOne({ _id: req.params.id })
        .then((callbell) => {
            console.log(callbell);
            res.json(callbell);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with find one', error: err.errors }),
        );
    },
    deleteCallBell: (req, res) => {
        CallBell.deleteOne({ _id: req.params.id })
        .then((callbell) => {
            console.log(callbell);
            res.json(callbell);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with delete', error: err.errors }),
        );
    },
    updateCallBell: (req, res) => {
        CallBell.updateOne({ _id: req.params.id }, req.body, { new: true, runValidators: true, context: 'query'})
        .then((callbell) => {
            console.log(callbell);
            res.json(callbell);
        })
        .catch((err) =>
            res.status(400).json({ message: 'something went wrong with update', error: err.errors }),
        );
    },
};