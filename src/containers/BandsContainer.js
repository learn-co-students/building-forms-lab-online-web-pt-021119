import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import {addBand} from '../actions/bandActions'

class BandsContainer extends Component {
  render() {
		debugger
    return(
			
      <div>
        <BandInput addBand={this.props.addBand}/>
				{this.props.bands.map(band => {
					return <li>{band.name}</li>
				})}
      </div>
    )
  }
}

const mapStateToProps = state => {
	return {bands: state.bands}
}

export default connect(mapStateToProps, {addBand})(BandsContainer)
