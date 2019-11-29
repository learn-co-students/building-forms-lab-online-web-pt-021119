// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

	state = {
		name: ""
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.addBand(this.state)
	}

	handleOnChange = event =>{
		this.setState({name: event.target.value})
	}

  render() {
    return(
			<div>
			Band Input
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.name} onChange={this.handleOnChange}/>
					<input type="submit" />
				</form>
      </div>
    )
	}
	
	
}

export default BandInput
