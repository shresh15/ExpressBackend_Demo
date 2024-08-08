require('dotenv').config()
console.log(process.env)
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/details', (req, res) => {
    res.send('Details page rendered')
  })
app.listen(process.env.PORT, (req,res) => {
  console.log(`Example app listening on port ${port}`)
})