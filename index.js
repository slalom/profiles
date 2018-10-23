const PptxGenJS = require('pptxgenjs')

const pptx = new PptxGenJS()
const slide = pptx.addNewSlide()

// SLIDE 10 x 5.625 inches

const addAvatar = () => {
  slide.addImage({
    path:'/Users/daniel.siwiec/Downloads/Profile.jpg', 
    x:6,
    y:0.2, 
    rounding: true,
    sizing: { type:'contain', w:1.3, h:1.3 }
  })

  const addAvatarFrame = () => {
    slide.addShape(pptx.shapes.OVAL, {
      x:6,
      y:0.2, 
      w:1.3,
      h:1.3,
      line: '818283',
      lienSize: 8
    })
  }

  addAvatarFrame()
}

const addName = () => {
  slide.addText('Dan Siwiec', {
    x: 0.2,
    y:0.2,
    bold: true,
    color: '0072C8',
    fontFace: 'Arial',
    fontSize: 24
  })
}

const addTitle = () => {
  slide.addText('Solutions Principal, Technology Enablement', {
    x: 0.2,
    y:0.5,
    bold: true,
    color: '818283',
    fontFace: 'Arial',
    fontSize: 14
  })
}

const addExperience = () => {
  slide.addShape(pptx.shapes.RECTANGLE, {
    x:'75%',
    y:0,
    w:'25%',
    h:'100%',
    fill:'0072C8' })

    const addYearsOfExperience = () => {
      slide.addText('14+', {
        x: '77%',
        y:'5%',
        bold: true,
        color: 'FFFFFF',
        fontFace: 'Arial',
        fontSize: 21
      })

      slide.addText('years\nexperience', {
        x: '77%',
        y:'13%',
        color: 'FFFFFF',
        fontFace: 'Arial',
        fontSize: 9
      })
    }

    const addApplicationsArchitected = () => {
      slide.addText('9', {
        x: '85%',
        y:'5%',
        bold: true,
        color: 'FFFFFF',
        fontFace: 'Arial',
        fontSize: 21
      })

      slide.addText('custom\napplications\narchitected', {
        x: '85%',
        y:'14%',
        color: 'FFFFFF',
        fontFace: 'Arial',
        fontSize: 9
      })
    }

    const addLine = () => {
      slide.addShape(pptx.shapes.LINE, {
        x:'77%',
        y:'25%',
        w:'22%',
        h: 0,
        line:'FFFFFF',
        lineSize: 0.5 });
    }

    const addSkills = () => {
      slide.addText('TOP SKILLS / EXPERTISE', {
        x: '77%',
        y:'28%',
        color: 'FFFFFF',
        bold: true,
        fontFace: 'Arial',
        fontSize: 10.5
      })
    }

    addApplicationsArchitected()
    addYearsOfExperience()
    addLine()
    addSkills()
}

addName()
addTitle()
addAvatar()
addExperience()
pptx.save('Sample Presentation')

