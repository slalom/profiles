const PptxGenJS = require('pptxgenjs')
const waitOn = require('wait-on')

class Presentation {
  constructor (name) {
    this.name = name
    this.sections = []
    this.pptx = new PptxGenJS()
    this.slide = this.pptx.addNewSlide()
  }

  _addSection (section) {
    section.elementMakers.forEach(elementMaker => elementMaker(this.slide))
  }

  async build () {
    this.sections.forEach(section => this._addSection(section))
    const filename = '/tmp/' + this.name + '.pptx'
    this.pptx.save(filename)
    await waitOn({ resources: [filename] })
    return filename
  }

  withSection (section) {
    this.sections.push(section)
    return this
  }
}

module.exports = Presentation
