const Profile = require('./profile')
const fs = require('fs')

exports.profile = async (req, res) => {
  const fileName = await new Profile(req.body).build()

  const stream = fs.createReadStream(fileName)
  res.setHeader('content-type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation')
  stream.pipe(res)
}
