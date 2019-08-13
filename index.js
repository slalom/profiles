const Profile = require('./profile')
const { send } = require('./email')

exports.profile = async (req, res) => {
  const filename = await new Profile(req.body.profile).build()
  await send({ to: req.body.emailToSendProfileTo, profileName: req.body.profile.name, filename })
  res.send('Email sent')
}
