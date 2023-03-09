const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment')

const postSchema = new Schema({
    postText: { type: String, required: true, minLength: 1, maxLength: 1000 },
    createdAt: { type: Date, default: () => Date.now() },
    username: { type: String, required: true },
    comments: [commentSchema],
    upvotes: {type: Number, required: true},
    downvotes: {type: Number, required: true} 
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

postSchema.virtual('commentCount').get(function () {
    return this.comments.length
});

const Posts = model('Posts', postSchema)
module.exports = Posts;