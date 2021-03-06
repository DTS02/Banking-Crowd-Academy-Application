const mongoose = require('mongoose');


// ini skema database buat tracking murid guru di kelas mana , udah lulus apa belum siswa nya
const EnroledSchema = new mongoose.Schema({
    classId: {
        type: String,
        default: 'n/a'
    },
    webinarId: {
        type: String,
        default: 'n/a'
    },
    pengajarId: {
        type: String,
        required: true,
    },
    pelajarId: {
        type: String,
    },
    schedule: {
        type: String,
    },
    graduationStatus: {
        type: Boolean,
        default: false,
    },
    enroledDetail: {
        type: String,
    }

}, { timestamps: true });

const Enroled = mongoose.model('Enroled', EnroledSchema);

module.exports = Enroled;