import React from 'react'
import {connect} from 'react-redux'
import {deleteRouteThunk, displayOneRoute} from '../store/route'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken =
  'pk.eyJ1Ijoia3dlZ29yZWsiLCJhIjoiY2sxNm1hMXJoMTZ2ZzNibzN6MmxzNHp4cCJ9.FFM6bmiYKaDRIEeWpm_iVw'

class MapBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: -74.009,
      lat: 40.705,
      zoom: 12
    }
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    })

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })
  }

  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{' '}
            {this.state.zoom}
          </div>
        </div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MapBox)
