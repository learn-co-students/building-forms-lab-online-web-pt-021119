import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import { addBand } from '../actions/bands';

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map(band => <li>{ band.name }</li>)

  render() {
    return(
      <div>
        <BandInput addBand={ this.props.addBand }/>
        { this.renderBands() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, { addBand })(BandsContainer);
