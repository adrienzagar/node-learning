const express = require('express')
const mongoose = require("mongoose")
// products = require("./products")
categories = require("./categories")
const app = express()
const port = 8080
const DB = 'mongodb://localhost/messieursCroquent'
const Schema = mongoose.Schema
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected to DB'))

const productSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: Object,
    required: true,
    name: {
      type: String,
      required: true
    }
  }
})

const Product = mongoose.model("Product", productSchema )

app.get('/', (req, res) => {
  res.send(`<p>Basic Api Rest</p>
    <ul>
        <li> All Products - <a href="/api/products">api/products</a></li>    
        <li> Single Product : 1 - <a href="/api/product/5f38795abb759784c4bfb084">api/product/:id</a></li>    
        <li> All Categories - <a href="/api/categories">api/categories</a></li>    
        <li> Single Category - <a href="/api/category/1">api/category/:id</a></li>    
    </ul>
  `)
})

// ============= Method Get
app.get('/api', (req, res) => {
    res.send('Welcome to the basic API ')
  })

  app.get('/api/products', (req, res) => {
    Product.find({}, (error, products) => {
      if (error) {
        res.status(400).error(error)
        return
      }
      res.status(200).send({
        response: products
      })
    })
  })

  app.get('/api/categories', (req, res) => {
    res.send(categories)
  })

  app.get('/api/product/:id', (req, res) => {7
    const id = req.params.id
    console.log(id)
    Product.findById(id, (error, product) => {
      if (error || !product) {
        res.status(400).send({
          error: true,
          message: 'page not found'
        })
      } else {
        res.status(200).send({
          response: product
        })
      }
    })
  })

  app.get('/api/category/:id', (req, res) => {7
    const id = req.params.id
    console.log(req.param.id)
    const singlecategory = categories.filter((category) => category.id == id)
    res.send(singlecategory[0])
  })

//! ================= Method Post

app.post('/api/product/add', function(req, res) {
  const product = new Product({
    "name": "Monsieur Seguin",
    "description": "Fromage frais, fromage de chèvre A.O.P, compotée d’oignons\r\nmaison, poire fraîche, noix, miel",
    "picture": "https://i.ibb.co/m6m1Y9N/Seguin.jpg",
    "price": 8,
    "category": {
      "id": 1,
      "name": "Croque-Monsieur"
    }
  })
  product.save(error => {
    if(error) {
      res.status(400).send({
        error: `error adding new post ${error}`
      })
      return
    }
    res.status(200).send('post successfully added')
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
