const express = require('express')
const mongoose = require('mongoose')
const Product = require('./Model/ProductModel')

const app = express()

app.use(express.json())

// defining routes
app.get('/', (req, res) => {
    res.send('Hello Node API')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog DEV')
})


// fetch/ read data 
app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    }

    catch(error) {
        
        res.status(500).json({message: error.message})
        
    }
})





//Pushing the data to database
app.post('/products', async(req, res) => {
    try {
        const products = await Product.create(req.body)
        res.status(200).json(products);
    }

    catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
        
    }
})

// fetch product by id
app.get('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    }

    catch(error) {
        
        res.status(500).json({message: error.message})
        
    }
})

// update product by id
app.put('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const products = await Product.findByIdAndUpdate(id, req.body);
        // if no product found in database
        if(!products) {
            return res.status(404).json({message: 'product not found with id ${id}'})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    }

    catch(error) {
        
        res.status(500).json({message: error.message})
        
    }
})

// delete a product
app.delete('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const products = await Product.findByIdAndDelete(id, req.body);
        // if no product found in database
        if(!products) {
            return res.status(404).json({message: 'product not found with id ${id}'})
        }
        
        res.status(200).json(products);
    }

    catch(error) {
        
        res.status(500).json({message: error.message})
        
    }
})


// connecting the app to database
mongoose.connect('mongodb+srv://naeemachang:naeMONGO@api0.xsababo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=AtlasApp').
then(() => {
    app.listen(4000, () => {
        console.log('Node API app is running on port 4000')
    })

    console.log('Connected to MongoDB Database')
}).catch((error => {
    console.log(error)
}))

