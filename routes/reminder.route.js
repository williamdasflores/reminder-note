const reminderController = require('../controller/reminder.controller');

module.exports = (router) => {
    router.post('/create', reminderController.create);
    router.get('/:title', reminderController.get);
    router.get('/', reminderController.getList);
    router.put('/update/:title', reminderController.update);
    router.delete('/:title', reminderController.delete);
}