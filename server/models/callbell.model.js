const mongoose = require('mongoose'); 

const CallBellSchema = new mongoose.Schema(
    {
        room: {
            type: String, 
            required: [true, 'Your room number is REQUIRED!'], 
            enum: [
                '5100', 
                '5101', 
                '5102', 
                '5103', 
                '5104', 
                '5105', 
                '5106', 
                '5107', 
                '5108', 
                '5109', 
                '5110', 
                '5112', 
                '5114', 
                '5116', 
                '5118'
            ]
        },
        request: {
            type: String, 
            required: [true, 'Your selection is REQUIRED!'], 
            enum: [
                'Glass of water', 
                'Pain Medication', 
                'Medication', 
                'Change linen', 
                'Need a blanket', 
                'Speak with nurse', 
                'Need to use the bathroom', 
                'Spill/Clean up', 
                'IV Pump is beeping', 
                'Custom:'
            ]
        },
        custom: {
            type: String, 
        }, 
        urgency: {
            type: String, 
            required: [true, 'Your urgency rating is REQUIRED!'], 
            enum: [
                'Low', 
                'Low-Medium', 
                'Medium', 
                "Medium-High", 
                'High'
            ]
        }
    }, 
    { timestamps: true}

); 

const CallBell = mongoose.model('CallBell', CallBellSchema); 

module.exports = CallBell; 