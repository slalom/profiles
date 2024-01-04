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

const Instructions = props => (
  <div>
    <div>
      <div style={{ textAlign: 'right' }}>Download YAML <a href="#/" onClick={downloadTemplate}>template</a> | Install official Slalom <a href="https://twodegrees1.sharepoint.com/teams/marketing/SitePages/Slalom-fonts.aspx" target="_blank" rel="noreferrer">fonts</a></div>
    </div>
  </div>
)

export default Instructions