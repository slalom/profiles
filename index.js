const Profile = require('./profile')
const { send } = require('./email')

exports.profile = async (req, res) => {
  const filename = await new Profile(req.body.profile).build()
  const { editResponseUrl } = req.body
  await send({ to: req.body.emailToSendProfileTo, profileName: req.body.profile.name, filename, editResponseUrl })
  res.send('Email sent')
}
