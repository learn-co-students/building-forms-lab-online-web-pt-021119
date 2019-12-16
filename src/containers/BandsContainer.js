import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'




class BandsContainer extends Component {
  render() {
    const {bands} = this.props;
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <div>{bands.map((band, idx) => <li key={idx}>{band.name}</li>)}</div>
      </div>
    )
  }
}

const mapPropsToState = state => {
  return({
    bands: state.bands
  })
}

const mapDispatchToProps = dispatch =>
  ({addBand: band => dispatch({type: "ADD_BAND", band}) })




export default connect(mapPropsToState, mapDispatchToProps)(BandsContainer)
