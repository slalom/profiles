const Presentation = require('./presentation')
const Section = require('./section')
const { blue, gray, white, lightGray, logo } = require('./consts')

class Profile {
  constructor (profile) {
    this.profile = profile
    this._avatar = new Section({ x: 0.6, y: 0.03 })
      .withImage({
        path: profile.avatar,
        rounding: true,
        sizing: { type: 'contain', w: 1.3, h: 1.3 }
      })
      .withShape({
        type: 'OVAL',
        w: 1.3,
        h: 1.3,
        line: gray,
        lienSize: 8
      })

    this._name = new Section({ x: 0.01, y: 0.03 })
      .withText({
        text: profile.name,
        color: blue,
        bold: true,
        fontSize: 24
      })
      .withText({
        text: `${profile.title}, ${profile.practice}`,
        y: 0.07,
        color: gray,
        bold: true,
        fontSize: 14
      })

    this._experience = new Section({ x: 0.75, y: 0 })
      .withShape({
        type: 'RECTANGLE',
        w: '25%',
        h: '100%',
        fill: blue
      })
      .withText({
        text: `${profile.yearsOfExperience}+`,
        x: 0.02,
        y: 0.05,
        bold: true,
        color: white,
        fontSize: 21
      })
      .withText({
        text: 'years of\nexperience',
        x: 0.02,
        y: 0.13,
        color: white,
        fontSize: 9
      })
      .withText({
        text: profile.numberOfArchitectedApps,
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
        lineSpacing: 18,
        color: white,
        fontSize: 9
      })

    this._inMyWords = new Section({ x: 0.01, y: 0.17 })
      .withShape({
        type: 'RECTANGLE',
        w: '57%',
        h: '20%',
        fill: lightGray
      })
      .withShape({
        type: 'RECTANGLE',
        w: '57%',
        h: '20%',
        line: blue
      })
      .withText({
        text: 'IN MY WORDS',
        bold: true,
        color: blue,
        fontSize: 12
      })
      .withText({
        text: `"${profile.inMyWords}"`,
        w: '57%',
        y: 0.04,
        align: 'justify',
        fontSize: 10
      })

    this._summary = new Section({ x: 0.01, y: 0.37 })
      .withText({
        text: 'SUMMARY',
        bold: true,
        color: blue,
        fontSize: 12
      })
      .withText({
        text: profile.summary,
        w: '70%',
        y: 0.04,
        align: 'justify',
        fontSize: 10
      })

    this._projects = new Section({ x: 0.01, y: 0.58 })
      .withText({
        text: 'PROJECTS HIGHLIGHTS',
        bold: true,
        color: blue,
        fontSize: 12
      })
      .withText({
        text: profile.projects.map(project => `\u25A0 ${project.role} - ${project.field}\n${project.description}`).join('\n'),
        w: '70%',
        y: 0.04,
        align: 'justify',
        fontSize: 9
      })

    this._logo = new Section({ x: 0.92, y: 0.95 })
      .withImage({
        path: logo.url,
        w: 0.2 * logo.ratio,
        h: 0.2
      })
  }

  async build (location) {
    return new Presentation(this.profile.name)
      .withSection(this._avatar)
      .withSection(this._name)
      .withSection(this._experience)
      .withSection(this._inMyWords)
      .withSection(this._summary)
      .withSection(this._projects)
      .withSection(this._logo)
      .build(location)
  }
}

module.exports = Profile
