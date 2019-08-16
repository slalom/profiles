const sgMail = require('@sendgrid/mail')
const { promisify } = require('util')
const fs = require('fs')

const readFile = promisify(fs.readFile)

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const fileContents = async filename => {
  const file = await readFile(filename)
  return Buffer.from(file).toString('base64')
}

module.exports.send = async ({ to, filename, profileName, editResponseUrl }) => {
  const msg = {
    to,
    from: 'te-profiles@slalom.com',
    subject: `Requested profile for ${profileName}`,
    html: `To edit your response and regenerate the profile go <a href=${editResponseUrl}>here</a>.
          <p>
          For help, contact <strong>Dan Siwiec</strong>`,
    attachments: [
      {
        content: await fileContents(filename),
        filename: `${profileName}.pptx`,
        type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
      }
    ]
  }
  sgMail.send(msg)
}
