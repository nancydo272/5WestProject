const CallBellController = require('../controllers/callbell.controller');

module.exports = (app) => {
    app.get('/api/callbells', CallBellController.getCallBells);
    app.get('/api/callbells/:id', CallBellController.getCallBellById);
    app.post('/api/callbells/create', CallBellController.createCallBell);
    app.put('/api/callbells/:id', CallBellController.updateCallBell);
    app.delete('/api/callbells/:id', CallBellController.deleteCallBell);
};