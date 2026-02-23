const express = require('express')
const app = express()


require('dotenv').config()
const port = process.env.PORT || 3010
app.get('/', (req, res) => {
  res.send('<H1>Lab 05 Docker Compose </H1>')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
