const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send(`<p>Basic Api Rest</p>
    <ul>
        <li> All Posts - <a href="/api/posts">api/posts</a></li>    
        <li> Single Post - <a href="/api/posts/1">api/post/:id</a></li>    
    </ul>
  `)
})
app.get('/api', (req, res) => {
    res.send('Welcome to the basic API ')
  })

  app.get('/api/posts', (req, res) => {
    res.send('All post ')
  })

  app.get('/api/post/1', (req, res) => {
    res.send('One Single post')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

