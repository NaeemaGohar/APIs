// CREATE

//define the schema for the model
const mongoose = require('mongoose')
const schema = mongoose.Schema({
           name: {
            type: String,
            required: [true, 'Product name is required']
           },
           quantity: {
            type: Number,
            required: [true, 'This field is required'],
            default: 0
           },
           price: {
            type: Number,
            required: [true, 'This field is required']
           },
           image: {
            type: String,
            required: false
           },
           description: {
            type: String,
            required: false
           }
},
           {
           timestamps: true 
})

const Product = mongoose.model('Product', schema);

module.exports = Product;