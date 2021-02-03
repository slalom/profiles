import Presentation from './presentation'
import Section from './section'
import { logo } from './consts'

const toProjectBlocks = ({ field, project, role, items }) => {
  return [
    { text: `${role} - ${field}`, options: { fontFace: 'Slalom Sans', fontSize: 10, bold: true, paraSpaceBefore: 16, breakLine: true } },
    { text: items.join('. '), options: { fontSize: 9, paraSpaceBefore: 6, lineSpacing: 14, breakLine: true } }]
}
export default class Profile {
  constructor(profile, photo) {
    this.profile = profile
    this.photo = photo

    this._leftTab = new Section({ x: 0, y: 0 })
      .withText({
        text: [
          { text: profile.name, options: { fontFace: 'Slalom Sans Bold', fontSize: 33, breakLine: true } },
          { text: '\n\n\n' },
          { text: `${profile.title}\n${profile.subpractice}`, options: { fontSize: 14, breakLine: true } },
          { text: '\n' },
          { text: profile.about, options: { fontSize: 10 } }
        ],
        x: 0.04,
        y: 0.37,
        w: '27%',
        fontSize: 16
      })

    this._avatar = new Section({ x: 0.05, y: 0.1 })
      .withImage({
        data: this.photo,
        rounding: true,
        sizing: { type: 'cover', w: 1.82, h: 1.82 }
      })

    this._logo = new Section({ x: 0.87, y: 0.09 })
      .withImage({
        path: logo.url,
        w: 0.27 * logo.ratio,
        h: 0.27
      })

    this._middle = new Section({ x: 0.34, y: 0.16 })
      .withText({ text: 'RELEVANT EXPERIENCE', fontFace: 'Slalom Sans Bold', fontSize: 10, bold: true, charSpacing: 2 })
      .withShape({ x: 0.01, y: 0.04, type: 'LINE', h: 0, w: '35%', line: { width: 1 } })
      .withText({ y: 0.07, w: '35%', text: profile.projects.map(toProjectBlocks).flat() })

    const skills = (profile.certs || []).concat(profile.skills)
    this._right = new Section({ x: 0.73, y: 0.16 })
      .withText({ text: 'SKILLS', fontFace: 'Slalom Sans Bold', fontSize: 10, bold: true, charSpacing: 2 })
      .withShape({ x: 0.01, y: 0.04, type: 'LINE', h: 0, w: '23%', line: { width: 1 } })
      .withText({ y: 0.09, w: '23%', text: skills.join('\n'), fontSize: 10, bullet: true, bulletMargin: 10, paraSpaceBefore: 10 })
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