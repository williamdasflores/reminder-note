const Reminder = require('../model/reminder.note')
const moment = require('moment');

exports.create = async (request, response) => {
    const reminder = await new  Reminder({
        title: request.body.title,
        description: request.body.description,
        dateInsertion: moment()
    });

    reminder.save(error => {
        if (error) {
            return next(error);
        }
        response.send(201);
    });
};

exports.update = async(request, response) => {
    const title = request.params.title;
    const reminderUpdated = await Reminder.findOneAndUpdate({
        title: title,
        $set: request.body,
    })
    response.send(204);
};

exports.get = async (request, response) => {
    const title = request.params.title;
    const reminder = await Reminder.findOne({ title: title }).select({
        "title": 1,
        "description": 2,
        "dateInsertion": 3
    });
    response.send(reminder);
};

exports.getList = async(request, response) => {
    const listReminder = await Reminder.find({}).select({ 
        "title": 1,
        "description": 2,
        "dateInsertion": 3
    });
    response.send(listReminder);
}; 

exports.delete = async(request, response) => {
    const title = request.params.title;
    await Reminder.findOneAndDelete({ title: title });
    response.send(204);
};

