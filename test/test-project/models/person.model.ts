import * as mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const personSchema: mongoose.Schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: Date,
    address: {
        street1: String,
        street2: String,
        city: String,
        state: String,
        zip: String,
    },
    phone: String,
    email: String,
    car: {
        type: ObjectId,
        ref: 'Car',
    },
});

const personModel = mongoose.model('Person', personSchema);
export { personModel };
