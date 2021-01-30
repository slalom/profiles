import pptxgen from '@danielsiwiec/pptxgenjs'
import { font } from './consts'

const pptx = new pptxgen()

export default class Section {
  constructor ({ x, y }) {
    this.x = x
    this.y = y
    this.elementMakers = []
  }

  _applyOffset (opts) {
    opts.x = opts.x ? opts.x + this.x : this.x
    opts.y = opts.y ? opts.y + this.y : this.y

    opts.x = `${opts.x * 100}%`
    opts.y = `${opts.y * 100}%`
  }

  withText (opts) {
    this.elementMakers.push(slide => {
      this._applyOffset(opts)
      opts.valign = 'top'
      opts.fontFace = font
      slide.addText(opts.text, opts)
    })
    return this
  }

  withImage (opts) {
    this.elementMakers.push(slide => {
      this._applyOffset(opts)
      slide.addImage(opts)
    })
    return this
  }

  withShape (opts) {
    this.elementMakers.push(slide => {
      this._applyOffset(opts)
      slide.addShape(pptx.shapes[opts.type], opts)
    })
    return this
  }
}
