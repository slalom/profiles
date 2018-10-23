const profile = require('./dan.siwiec.json')
const Presentation = require('./presentation')
const Section = require('./section')
const { blue, gray, white, lightGray } = require('./consts')

const avatar = new Section({ x: 0.6, y: 0.03 })
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

const name = new Section({ x: 0.01, y: 0.03 })
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

const experience = new Section({ x: 0.75, y: 0 })
  .withShape({
    type: 'RECTANGLE',
    w: '25%',
    h: '100%',
    fill: blue
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
    color: white,
    fontSize: 9
  })

const inMyWords = new Section({ x: 0.01, y: 0.17 })
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

const summary = new Section({ x: 0.01, y: 0.37 })
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

const projects = new Section({ x: 0.01, y: 0.58 })
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

new Presentation(profile.name)
  .withSection(avatar)
  .withSection(name)
  .withSection(experience)
  .withSection(inMyWords)
  .withSection(summary)
  .withSection(projects)
  .build()
