import React from 'react'
import ReactGA from 'react-ga'
import jsYaml from 'js-yaml'
import { FileDrop } from 'react-file-drop'
import { Container,Grid } from '@mui/material'
import './Main.css'
import Instructions from './Instructions'
import Profile from './pptx/profile'
import { CloudDownload } from '@mui/icons-material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

class Main extends React.Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	uploadPhoto = files => {
		const IMAGE_FILE_TYPES = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff'];
		const extension = files[0].name.split('.').pop().toLowerCase();
        
		if (IMAGE_FILE_TYPES.indexOf(extension) > -1) {
			const reader = new FileReader()

			reader.addEventListener('load', () => {
				this.setState({ photo: reader.result })
			}, false)

			reader.readAsDataURL(files[0])
			ReactGA.event({
				category: 'User',
				action: 'Photo Uploaded'
			})
		} else {
			document.querySelector('#imgErr').style = 'display: block'

		}
	}

	generatePptx = files => {
		const YAML_FILE_TYPES = ['yaml', 'yml'];
		const extension = files[0].name.split('.').pop().toLowerCase();

		if (YAML_FILE_TYPES.indexOf(extension) > -1) {
			const reader = new FileReader()

			reader.onload = e => {
				const content = reader.result;
				const profile = jsYaml.load(content)
				const name = profile.firstname + "_" + profile.lastname
				let pptx = new Profile(profile, this.state.photo).build()
				this.setState({ pptx, name })
			}

			reader.readAsText(files[0])
			ReactGA.event({
				category: 'User',
				action: 'YAML Uploaded'
			})
		} else {
			document.querySelector('#yamlErr').style = 'display: block'
		}
	}

	downloadPptx = () => {
		this.state.pptx.write('blob').then(data => {
			let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
			let url = window.URL.createObjectURL(blob)
			let a = document.createElement('a')
			a.href = url
			a.download = `${this.state.name}.pptx`
			a.click()
			ReactGA.event({
				category: 'User',
				action: 'PPTX Downloaded'
			})
		})
	}

	render() {
		return (
			<Container maxWidth="lg">
				<Instructions></Instructions>
				<Grid container spacing={0}
					alignContent="center"
					justify="center"
					style={{ marginTop: '2em' }}>
					<Grid item xs={12} style={{ minHeight: '20vh' }}>
						<h1 style={{ textAlign: 'center' }}><img height="30px" src="./images/logo-blue.png" alt="Slalom Logo"/> Profiles Maker</h1>
					</Grid>
					<Grid textAlign="center" item xs={4}>
						{!this.state.photo &&
							<div>
								<FileDrop onDrop={(files, event) => this.uploadPhoto(files)} >
									Drop your square shaped photo here
									
								</FileDrop>
								<p id="imgErr" class="error">Invalid Image File!</p>
							</div>
						}
						{this.state.photo && 
							<div>
								<CheckCircleIcon style={{ fontSize: 120, color: '#0c62fb' }}/>
								<p>Image Uploaded.</p>
							</div>
						}
					</Grid>
					<Grid textAlign="center" item xs={4}>
						{this.state.photo && !this.state.pptx &&
							<div>
								<FileDrop onDrop={(files, event) => this.generatePptx(files)}>
									Drop the profile YAML here
								</FileDrop>
								<p id="yamlErr" class="error">Invalid Profile YAML!</p>
							</div>
						}
						{this.state.pptx && 
							<div>
								<CheckCircleIcon style={{ fontSize: 120, color: '#0c62fb' }} />
								<p>Profile Uploaded.</p>
							</div>
						}
					</Grid>
					<Grid textAlign="center" item xs={4}>
						{this.state.pptx && 
							<div>
								<a href="#/" onClick={this.downloadPptx}><CloudDownload style={{ fontSize: 120, color: 'green' }} /></a>
								<p>Your Profile is ready!</p>
							</div>
						}
					</Grid>
				</Grid>
				<div style={{ position: 'absolute', left: 0, bottom: '1em', right: '2em', textAlign: 'right' }}>
					by Slalom NorCal TE
				</div>
			</Container>
		)
	}

}

export default Main
