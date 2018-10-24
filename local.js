const Profile = require('./profile')

const profile = require(`./${process.argv[2]}`)

new Profile(profile).build('.')
