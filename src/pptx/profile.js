import Presentation from './presentation'
import Section from './section'
import { logo } from './consts'

const toProjectBlocks = ({ field, role, items }) => {
  return [
    { text: `${role} - ${field}`, options: { fontSize: 10.5, bold: true, paraSpaceBefore: 16, breakLine: true } },
    { text: items.join('\n'), options: { fontSize: 10.5, bullet: { indent: 15 }, paraSpaceBefore: 6, breakLine: true } }
  ]
}
export default class Profile {
  constructor(profile, photo) {
    this.profile = profile
    this.photo = photo

    this._leftTab = new Section({ x: 0.02, y: 0.45 })
      .withText({
        text: [
          { text: profile.firstname, options: { fontSize: 32, bold: true, color: '0c62fb', breakLine: true } },
          { text: profile.lastname, options: { fontSize: 32, bold: true, breakLine: true } },
          { text: '\n' },
          { text: `${profile.title}/${profile.practice}`, options: { fontSize: 14, bold: true, breakLine: true } },
          { text: '\n' },
          { text: profile.about, options: { fontSize: 11 } }
        ],
        w: 4.50,
        fontSize: 16
      })
      .withImage({
        path: logo.url,
        x: 0.007,
        y: 0.49,
        w: 0.17 * logo.ratio,
        h: 0.17
      })
      .withText({
        text: '\u00A92024 Slalom. All Rights Reserved. Proprietary and Confidential.',
        x: 0.06,
        y: 0.495,
        fontSize: 8,
        color: '8c8c8c'
      })

    this._avatar = new Section({ x: 0.03, y: 0.08 })
      .withImage({
        data: this.photo,
        rounding: false,
        sizing: { type: 'cover', w: 2.04, h: 2.04 }
      })

    this._middle = new Section({ x: 0.40, y: 0.13 })
      .withText({ x: 0.01, w: 4.77, text: 'RELEVANT EXPERIENCE', fontSize: 12, bold: true, color: '0c62fb', charSpacing: 2 })
      .withShape({ x: 0.01, y: 0.05, w: 4.0, type: 'LINE', h: 0, line: { width: 0.5, color: 'c4c4c4' } })
      .withText({ x: 0.01, y: 0.08, w: 4.77, text: profile.projects.map(toProjectBlocks).flat() })

    const skills = (profile.certs || []).map(cert => `Certified ${cert}`).concat(profile.skills)
    this._right = new Section({ x: 0.77, y: 0.13 })
      .withText({ x: 0.01, w: 2.69, text: 'SKILLS', fontSize: 12, bold: true, color: '0c62fb', charSpacing: 2 })
      .withShape({ x: 0.01, y: 0.05, w: 2.0, type: 'LINE', h: 0, line: { width: 0.5, color: 'c4c4c4' } })
      .withText({ x: 0.01, y: 0.08, w: 2.69, text: skills.join('\n'), fontSize: 10.5, bullet: { indent: 15 }, paraSpaceBefore: 6 })
  }

  build() {
    return new Presentation(this.profile.firstname + "_" + this.profile.lastname)
      .withSection(this._avatar)  
      .withSection(this._leftTab)
      .withSection(this._middle)
      .withSection(this._right)
      .build()
  }
}