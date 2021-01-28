const downloadTemplate = () => {
  fetch('./template.json')
    .then(response => {
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'template.json';
        a.click();
      });
    });
}

const Instructions = props => (<div>
  <div>
    <div>Download JSON <a href="#" onClick={downloadTemplate}>template</a></div>
  </div>
</div>)

export default Instructions