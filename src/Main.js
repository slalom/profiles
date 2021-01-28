import React from 'react'
import jsYaml from 'js-yaml'
import { FileDrop } from 'react-file-drop'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// import './download.css'
import './Main.css'
import Instructions from './Instructions'
import Profile from './pptx/profile'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

class Main extends React.Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	uploadPhoto = files => {
		const reader = new FileReader()

		reader.addEventListener('load', () => {
			this.setState({ photo: reader.result })
		}, false)

		reader.readAsDataURL(files[0])
	}

	generatePptx = files => {
		const reader = new FileReader()

		reader.onload = e => {
			const content = reader.result;
			const profile = jsYaml.load(content)
			const name = profile.name
			let pptx = new Profile(profile, this.state.photo).build()
			this.setState({ pptx, name })
		}

		reader.readAsText(files[0])
	}

	downloadPptx = () => {
		this.state.pptx.write('blob').then(data => {
			let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
			let url = window.URL.createObjectURL(blob)
			let a = document.createElement('a')
			a.href = url
			a.download = `${this.state.name}.pptx`
			a.click()
		})
	}

	render() {
		return (
			<Container maxWidth="md">
				<Instructions></Instructions>
				<h1 style={{textAlign: 'center'}}><img height="30px" src="./images/logo-blue.png"/> Profiles Maker</h1>
				<Grid container spacing={0}
					alignItems="center"
					justify="center"
					style={{ minHeight: '100vh' }}>

					<Grid item xs={3}>
						{!this.state.photo &&
							<FileDrop onDrop={(files, event) => this.uploadPhoto(files)}>
								Drop your square shaped photo here
					</FileDrop>}
						{this.state.photo && <CheckCircleIcon style={{ fontSize: 120, color: '#0c62fb' }} />}
					</Grid>
					<Grid item xs={3}>
						{this.state.photo && !this.state.pptx &&
							<FileDrop onDrop={(files, event) => this.generatePptx(files)}>
								Drop the profile YAML here
					</FileDrop>}
						{this.state.pptx && <CheckCircleIcon style={{ fontSize: 120, color: '#0c62fb' }} />}
					</Grid>
					<Grid item xs={3}>
						{this.state.pptx && <a href="#" onClick={this.downloadPptx}><CloudDownloadIcon style={{ fontSize: 120, color: 'green' }} /></a>}
					</Grid>
				</Grid>
				<div style={{position:'absolute', left:0, bottom:0, right:0, textAlign:'right'}}>
					by Dan Siwiec
				</div>
			</Container>
		)
	}

}

export default Main
