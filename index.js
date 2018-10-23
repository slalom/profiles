const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const Profile = require('./profile')
const port = 3000

app.use(bodyParser.json())
app.post('/', async (req, res) => {
  const fileName = await new Profile(req.body).build()
  res.sendFile(path.join(__dirname, fileName))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
