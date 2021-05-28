const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}

class Database {

    constructor() {
        this.connect();
    }
    connect() {
        const uri = "mongodb+srv://new_user_satyam:0W4qG8hA7koM9VHN@cluster0.g5eml.mongodb.net/Gamewinners?retryWrites=true&w=majority";
        mongoose.connect(uri, options).then(() => {
            console.log(" DB CONNECTED !!");
        }).catch((error) => {
            console.log("FAILED",error);
        })
    }
}
module.exports = new Database();