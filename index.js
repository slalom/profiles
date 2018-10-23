const profile = require('./dan.siwiec.json')
const Presentation = require('./presentation')
const Section = require('./section')
const { slalomBlue, slalomGray, white } = require('./consts')

const avatar = () => {
  return new Section({ x: 0.6, y: 0.03 })
    .withImage({
      path: profile.avatar,
      rounding: true,
      sizing: { type: 'contain', w: 1.3, h: 1.3 }
    })
    .withShape({
      type: 'OVAL',
      w: 1.3,
      h: 1.3,
      line: slalomGray,
      lienSize: 8
    })
}

const name = () => {
  return new Section({ x: 0.01, y: 0.03 })
    .withText({
      text: profile.name,
      color: slalomBlue,
      bold: true,
      fontSize: 24
    })
    .withText({
      text: `${profile.title}, ${profile.practice}`,
      y: 0.05,
      color: slalomGray,
      bold: true,
      fontSize: 14
    })
}

const experience = () => {
  return new Section({ x: 0.75, y: 0 })
    .withShape({
      type: 'RECTANGLE',
      w: '25%',
      h: '100%',
      fill: slalomBlue
    })
    .withText({
      text: `${profile.years}+`,
      x: 0.02,
      y: 0.05,
      bold: true,
      color: white,
      fontSize: 21
    })
    .withText({
      text: 'years\nexperience',
      x: 0.02,
      y: 0.13,
      color: white,
      fontSize: 9
    })
    .withText({
      text: profile.architectedNumber,
      x: 0.1,
      y: 0.05,
      bold: true,
      color: white,
      fontSize: 21
    })
    .withText({
      text: 'custom\napplications\narchitected',
      x: 0.1,
      y: 0.13,
      color: white,
      fontSize: 9
    })
    .withShape({
      type: 'LINE',
      y: 0.25,
      w: '25%',
      h: 0,
      line: white,
      lineSize: 0.5
    })
    .withText({
      text: 'TOP SKILLS / EXPERTISE',
      y: 0.28,
      bold: true,
      color: white,
      fontSize: 10.5
    })
    .withText({
      text: profile.skills.map(skill => `\u25A0   ${skill}`).join('\n'),
      y: 0.35,
      w: '25%',
      lineSpacing: 15,
      valign: 'top',
      color: white,
      fontSize: 9
    })
}

new Presentation(profile.name)
  .withSection(avatar())
  .withSection(name())
  .withSection(experience())
  .build()
