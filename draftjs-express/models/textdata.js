var mongoose = require('mongoose');
const {Schema} = mongoose;

var textSchema = Schema({
    textdata:{
        type:String,
        required:true
    }
})

const text = mongoose.model('Text',textSchema);

module.exports=text