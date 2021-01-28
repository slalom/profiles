const downloadTemplate = () => {
  fetch('./template.yaml')
    .then(response => {
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob)
        let a = document.createElement('a')
        a.href = url
        a.download = 'template.yaml'
        a.click()
      })
    })
}

const Instructions = props => (<div>
  <div>
    <div>Download YAML <a href="#" onClick={downloadTemplate}>template</a></div>
  </div>
</div>)

export default Instructions