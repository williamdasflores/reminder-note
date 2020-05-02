const Reminder = require('../model/reminder.note')

exports.create = async (request, response) => {
    const reminder = await new  Reminder({
        title: request.body.title,
        description: request.body.description
    });

    reminder.save(error => {
        if (error) {
            return next(error);
        }
        response.send('Reminder note created!');
    });
};

exports.update = async(request, response) => {
    const title = request.params.title;
    const reminderUpdated = await Reminder.findOneAndUpdate({
        title: title,
        $set: request.body,
    })
    response.send('Reminder updated');
};

exports.get = async (request, response) => {
    const title = request.params.title;
    const reminder = await Reminder.findOne({ title: title });
    response.send(reminder);
};

exports.getList = async(request, response) => {
    const listReminder = await Reminder.find({});
    response.send(listReminder);
}; 

exports.delete = async(request, response) => {
    const title = request.params.title;
    await Reminder.findOneAndDelete({ title: title });
    response.send('Note deleted');
};

