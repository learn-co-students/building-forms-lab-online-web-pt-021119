// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            name="name"
            onChange={event => this.handleChange(event)}
            value={this.state.name}
          />
          <button type="submit">Create Band</button>
        </form>
      </div>
    )
  }
}

export default BandInput
