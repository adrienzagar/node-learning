const express = require('express')
products = require("./products")
categories = require("./categories")
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send(`<p>Basic Api Rest</p>
    <ul>
        <li> All Products - <a href="/api/products">api/products</a></li>    
        <li> Single Product : 1 - <a href="/api/product/1">api/product/:id</a></li>    
        <li> All Categories - <a href="/api/categories">api/categories</a></li>    
        <li> Single Category - <a href="/api/category/1">api/category/:id</a></li>    
    </ul>
  `)
})
app.get('/api', (req, res) => {
    res.send('Welcome to the basic API ')
  })

  app.get('/api/products', (req, res) => {
    res.send(products)
  })

  app.get('/api/categories', (req, res) => {
    res.send(categories)
  })

  app.get('/api/product/:id', (req, res) => {7
    const id = req.params.id
    console.log(req.param.id)
    const singleproduct = products.filter((product) => product.id == id)
    console.log(singleproduct)
    res.send(singleproduct[0])
  })

  app.get('/api/category/:id', (req, res) => {7
    const id = req.params.id
    console.log(req.param.id)
    const singlecategory = categories.filter((category) => category.id == id)
    res.send(singlecategory[0])
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

