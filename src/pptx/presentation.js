import pptxgen from 'pptxgenjs'

export default class Presentation {
  constructor (name) {
    this.name = name
    this.sections = []
    this.pptx = new pptxgen()
    this.pptx.layout = 'LAYOUT_WIDE'
    this.slide = this.pptx.addSlide()
  }

  _addSection (section) {
    section.elementMakers.forEach(elementMaker => elementMaker(this.slide))
  }

  build () {
    this.sections.forEach(section => this._addSection(section))
    return this.pptx
  }

  withSection (section) {
    this.sections.push(section)
    return this
  }
}

