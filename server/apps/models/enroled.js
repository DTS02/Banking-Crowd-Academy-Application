const mongoose = require('mongoose');


// ini skema database buat tracking murid guru di kelas mana , udah lulus apa belum siswa nya
const EnroledSchema = new mongoose.Schema({
    classId: {
        type: mongoose.SchemaTypes.ObjectId,
    },
    webinarId: {
        type: String,
    },
    teacherId: {
        type: String,
        required: true,
    },
    learnerId: {
        type: String,
    },
    schedule: {
        type: String,
    },
    graduationStatus: {
        type: Boolean,
        default: false,
    },

}, { timestamps: true });

const Enroled = mongoose.model('Enroled', EnroledSchema);

module.exports = Enroled;