const dbConfig = () =>{
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://host.docker.internal:27017/RichTextEditor')
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));
}
module.exports = dbConfig