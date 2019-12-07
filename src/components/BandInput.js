// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addBand } from '../containers/BandsContainer';


class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleOnSubmit(event) }>
          <p>
            <label>Add Band</label>
            <input type="text" onChange={ this.handleChange } value={ this.state.name } />
          </p>
          <input type="submit" value="Add band!"/>
        </form>
      </div>
    )
  }
}

export default BandInput
