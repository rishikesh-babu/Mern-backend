// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const bookSchema = new Schema({
//     _id: { type: String },
//     title: { type: String, require: true },
//     pageCount: { type: Number },
//     publishedDate: { type: Date },
//     thumbnailUrl: { type: String },
//     shortDescription: String,
//     longDescription: String,
//     status: {
//         type: String,
//         enum: ['PUBLISH', 'UNPUBLISH'],
//         default: 'PUBLISH',
//     },
//     authors: [String],
//     categories: [String]
// })

// const Book = mongoose.model('books', bookSchema) // books - collection from database
// module.exports = Book;

// ----------------------------------------------------------------------------------------------------------

const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    _id: {
        type: String
    },
    title: {
        type: String,
        require: true
    },
    pageCount: {
        type: Number
    },
    publishedDate: {
        type: Date
    },
    thumbnailUrl: {
        type: String
    },
    shortDescription: String,
    longDescription: String,
    status: {
        type: String,
        enum: ['PUBLISH', 'UNPUBLISH'],
        default: 'PUBLISH',
    },
    authors: [String],
    categories: [String]
})

const bookModel = mongoose.model('books', bookSchema)
module.exports = bookModel