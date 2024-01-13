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

    let introText = [
      { text: profile.firstname, options: { fontSize: 32, bold: true, color: '0c62fb', breakLine: true } },
      { text: profile.lastname, options: { fontSize: 32, bold: true, breakLine: true } },
      { text: '\n' }
    ];

    if (profile.desiredrole) {
      introText.push(
        { text: `${profile.desiredrole}`, options: { fontSize: 14, bold: true, breakLine: true } },
        { text: '\n' }
      )
    }

    introText.push({ text: profile.about, options: { fontSize: 11 } });

    this._leftTab = new Section({ x: 0.04, y: 0.42 })
      .withText({
        text: introText,
        w: 4.20,
        fontSize: 16
      })
      .withImage({
        path: logo.url,
        x: 0.005,
        y: 0.522,
        w: 0.17 * logo.ratio,
        h: 0.17
      })
      .withText({
        text: '\u00A92024 Slalom. All Rights Reserved. Proprietary and Confidential.',
        x: 0.06,
        y: 0.527,
        fontSize: 8,
        color: '8c8c8c'
      })

    this._avatar = new Section({ x: 0.04, y: 0.09 })
      .withImage({
        x: 0.005,
        data: this.photo,
        rounding: false,
        sizing: { type: 'cover', w: 2.04, h: 2.04 }
      })
      .withShape({
        type: 'MOON',
        x: 0.139,
        y: 0.239,
        w: 0.5,
        h: 0.5,
        rotate: 225,
        rectRadius: 0.35,
        fill: { color: 'ffffff' }
      })

    this._middleTab = new Section({ x: 0.35, y: 0.120 })
      .withText({ x: 0.01, w: 4.77, text: 'RELEVANT EXPERIENCE', fontSize: 12, bold: true, color: '0c62fb', charSpacing: 2 })
      .withShape({ x: 0.01, y: 0.045, w: 4.0, type: 'LINE', h: 0, line: { width: 0.5, color: 'c4c4c4' } })
      .withText({ x: 0.01, y: 0.06, w: 4.77, text: profile.projects.map(toProjectBlocks).flat() })

    this.skills = (profile.skills || [])
    this._rightTab = new Section({ x: 0.70, y: 0.12 })
      .withText({ x: 0.01, w: 2.69, text: 'SKILLS', fontSize: 12, bold: true, color: '0c62fb', charSpacing: 2 })
      .withShape({ x: 0.01, y: 0.045, w: 2.0, type: 'LINE', h: 0, line: { width: 0.5, color: 'c4c4c4' } })
      .withText({ x: 0.01, y: 0.06, w: 2.69, text: this.skills.join('\n'), fontSize: 10.5, bullet: { indent: 15 }, paraSpaceBefore: 6 })

    if (profile.certs) {
      this._rightTab = this._rightTab
        .withText({ x: 0.01, y: 0.52, w: 3.6, text: 'EDUCATION & CERTIFICATIONS', fontSize: 12, bold: true, color: '0c62fb', charSpacing: 2 })
        .withShape({ x: 0.01, y: 0.565, w: 2.0, type: 'LINE', h: 0, line: { width: 0.5, color: 'c4c4c4' } })
        .withText({ x: 0.01, y: 0.58, w: 2.69, text: profile.certs.join('\n'), fontSize: 10.5, bullet: { indent: 15 }, paraSpaceBefore: 6 })
    }
  }

  build() {
    let presentation = new Presentation(this.profile.firstname + "_" + this.profile.lastname)
      .withSection(this._avatar)  
      .withSection(this._leftTab)
      .withSection(this._middleTab)
      .withSection(this._rightTab)

    return presentation.build()
  }
}