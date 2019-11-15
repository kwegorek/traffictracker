import React from 'react'
import {connect} from 'react-redux'
import {displayRoutes} from '../store/route'
import {compose, withProps} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

export class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stores: [
        {lat: 47.49855629475769, lng: -122.14184416996333},
        {latitude: 47.359423, longitude: -122.021071},
        {latitude: 47.2052192687988, longitude: -121.988426208496},
        {latitude: 47.6307081, longitude: -122.1434325},
        {latitude: 47.3084488, longitude: -122.2140121},
        {latitude: 47.5524695, longitude: -122.0425407}
      ]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => console.log('You clicked me!')}
        />
      )
    })
  }

  render() {
    return (
      <GoogleMap defaultZoom={8} defaultCenter={{lat: 47.444, lng: -122.176}}>
        {this.displayMarkers()}
      </GoogleMap>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    displayRoutes: () => dispatch(displayRoutes())
  }
}

export default withScriptjs(withGoogleMap(Map))
