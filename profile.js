const Presentation = require('./presentation')
const Section = require('./section')
const { blue, black, white, logo } = require('./consts')

const toProjectBlocks = ({ field, project, role, items }) => {
  return [
    { text: `${field} | ${project} `, options: { fontSize: 8, color: blue, bold: true, breakLine: false, paraSpaceBefore: 8 } },
    { text: `${role}`, options: { fontSize: 8, color: black, italic: true, breakLine: true } },
    { text: items.join('\n'), options: { fontSize: 8, bullet: true, paraSpaceBefore: 4 } }]
}

const headerOptions = { fontSize: 14, bold: true, breakLine: true, paraSpaceAfter: 2 }

class Profile {
  constructor(profile) {
    this.profile = profile

    this._leftTab = new Section({ x: 0, y: 0 })
      .withShape({
        type: 'RECTANGLE',
        w: '25%',
        h: '100%',
        fill: black
      })
      .withText({
        text: [
          { text: profile.name, options: { fontSize: 21, bold: true, breakLine: true } },
          { text: '\n' },
          { text: profile.practice, options: { bold: true, breakLine: true } },
          { text: profile.subpractice, options: { fontSize: 7.5, bold: true, breakLine: true } },
          { text: '\n' },
          { text: profile.title },
        ],
        x: 0.02,
        y: 0.42,
        color: white,
        fontSize: 9
      })

    this._logo = new Section({ x: 0.02, y: 0.9 })
      .withImage({
        path: logo.url,
        w: 0.2 * logo.ratio,
        h: 0.2
      })

    this._avatar = new Section({ x: 0.05, y: 0.1 })
      .withImage({
        path: profile.avatar,
        rounding: true,
        sizing: { type: 'contain', w: 1.54, h: 1.54 }
      })

    this._middle = new Section({ x: 0.27, y: 0.1 })
      .withText({
        text: [
          { text: 'About', options: headerOptions },
          { text: profile.about },
          { text: '\n' },
          { text: 'Certifications', options: headerOptions },
          { text: profile.certs.join('\n'), options: { bullet: true } },
          { text: '\n' },
          profile.edu ? { text: 'Education', options: headerOptions } : {},
          profile.edu ? { text: profile.edu.join('\n'), options: { bullet: true } } : {},
          { text: '\n' },
          { text: 'Areas of Expertise', options: headerOptions },
          { text: profile.skills.join('\n'), options: { bullet: true } },
        ],
        color: black,
        align: 'justify',
        w: '25%',
        fontSize: 7.5
      })

    this._right = new Section({ x: 0.54, y: 0.1 })
      .withText({
        text: [
          { text: 'Select Project Experience', options: headerOptions }
        ].concat(profile.projects.map(toProjectBlocks).flat()),
        w: '42%',
        align: 'justify',
        fontSize: 9
      })
  }

  async build(location) {
    return new Presentation(this.profile.name)
      .withSection(this._leftTab)
      .withSection(this._logo)
      .withSection(this._avatar)
      .withSection(this._middle)
      .withSection(this._right)
      .build(location)
  }
}

module.exports = Profile
