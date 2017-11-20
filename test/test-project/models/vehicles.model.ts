import * as mongoose from 'mongoose';

const vehicleSchema: mongoose.Schema = new mongoose.Schema({
    year: Number,
    make: String,
    model: String,
    color: String,
});

const carSchema: mongoose.Schema = new mongoose.Schema({
    basicInfo: vehicleSchema,
});

const truckSchema: mongoose.Schema = new mongoose.Schema({
    basicInfo: vehicleSchema,
    engineType: {
        type: String,
        enum: ['Diesel', 'Unleaded'],
    },
});

const carModel = mongoose.model('Car', carSchema);
const truckModel = mongoose.model('Truck', truckSchema);
export { carModel, truckModel };
