const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    code: { type: String, require: true, index: true},
    name: { type: String, require: true, index: true},
    length: { type: String, require: true},
    start: { type: Date, require: true},
    resort: { type: String, require: true},
    perPerson: { type: String, require: true},
    image: { type: String, require: true},
    description: { type: String, require: true}
});
// mongoose.model("trips", tripSchema):
module.exports = mongoose.model("trips", tripSchema);

