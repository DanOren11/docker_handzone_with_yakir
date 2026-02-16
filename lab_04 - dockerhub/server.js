const express = require('express')
const app = express()
const port = 3333

app.get('/', (req, res) => {
  res.send(' GREATE YOU haved find me :)!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
