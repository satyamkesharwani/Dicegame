const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    player: { type: String, trim: true },

},
    {
        timestamps: true,
    }
);

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;