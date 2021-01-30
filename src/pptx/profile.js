import Presentation from './presentation'
import Section from './section'
import { blue, black, white, logo } from './consts'

const headerOptions = { fontSize: 12, bold: true, breakLine: true, paraSpaceAfter: 2, bullet: false }
const bulletOptions = { fontSize: 8, bullet: true, bulletMargin: 10, breakLine: true }

const toProjectBlocks = ({ field, project, role, items }) => {
  return [
    { text: `${field} | ${project} `, options: { fontSize: 8, color: blue, bold: true, breakLine: false, paraSpaceBefore: 8 } },
    { text: `${role}`, options: { fontSize: 8, color: black, italic: true, breakLine: true } },
    { text: items.join('\n'), options: Object.assign({}, bulletOptions, { paraSpaceBefore: 4 }) }]
}
export default class Profile {
  constructor(profile, photo) {
    this.profile = profile
    this.photo = photo

    this._leftTab = new Section({ x: 0, y: 0 })
      .withShape({
        type: 'RECTANGLE',
        w: '20%',
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
          { text: profile.title }
        ],
        x: 0.01,
        y: 0.42,
        w: '20%',
        color: white,
        fontSize: 9
      })

    this._logo = new Section({ x: 0.01, y: 0.95 })
      .withImage({
        path: logo.url,
        w: 0.2 * logo.ratio,
        h: 0.2
      })

    this._avatar = new Section({ x: 0.02, y: 0.1 })
      .withImage({
        data: this.photo,
        rounding: true,
        sizing: { type: 'cover', w: 1.54, h: 1.54 }
      })

    this._middle = new Section({ x: 0.21, y: 0.1 })
      .withText({
        text: [
          { text: 'About', options: headerOptions },
          { text: profile.about },
          { text: '\n' },
          profile.certs ? { text: 'Certifications', options: headerOptions } : {},
          profile.certs ? { text: profile.certs.join('\n'), options: bulletOptions } : {},
          { text: '\n' },
          profile.edu ? { text: 'Education', options: headerOptions } : {},
          profile.edu ? { text: profile.edu.join('\n'), options: bulletOptions } : {},
          { text: '\n' },
          { text: 'Areas of Expertise', options: headerOptions },
          { text: profile.skills.join('\n'), options: bulletOptions }
        ],
        color: black,
        w: '28%',
        fontSize: 7.5
      })

    this._right = new Section({ x: 0.5, y: 0.1 })
      .withText({
        text: [
          { text: 'Select Project Experience', options: headerOptions }
        ].concat(profile.projects.map(toProjectBlocks).flat()),
        w: '46%',
        fontSize: 9
      })
  }

  build() {
    return new Presentation(this.profile.name)
      .withSection(this._leftTab)
      .withSection(this._logo)
      .withSection(this._avatar)
      .withSection(this._middle)
      .withSection(this._right)
      .build()
  }
}