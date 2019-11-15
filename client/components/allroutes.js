import React from 'react'
import {connect} from 'react-redux'
import {displayRoutes} from '../store/route'
import Traffic from '../components/traffic'
import Map from './map'

// function initMap(){
//     let options = {
//         zoom:13,
//         center:{lat:42.3601, lng:-71.0589}
//     }

//     let map = new google.maps.Map(document.getElementById('map'), options)
// }

// function addMarker(coords){
//     let marker = new google.maps.marker({
//         position:coords,
//         map:map
//     })
// }

// addMarker({lat:42.3601, lng:-71.0589})
// let marker = new google.amps.Marker({position:{lat:42.3601, lng:-71.0589}, map:map})

// let infoWindow = new google.maps.infoWindow({
//     content:'<h1>Start</h1>'
// });

// marker.addEventListener('click', function(){
//     infoWindow.open(map, maerker)
// })

class AllRoutes extends React.Component {
  constructor() {
    super()

    this.state = {
      locaction: {
        loc1: [74, 70]
      },
      start: '',
      end: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    console.log('mounting')
    await this.props.displayRoutes()
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    // this.setState({

    //     [event.target.name]:event.target.value

    // })
    // console.log(this.state)
  }

  render() {
    return (
      <React.Fragment>
        <div id="allroutes-wrapper">
          <div>
            <h1>STEP:1</h1>
          </div>

          <div className="col1">
            <h2>Choose your route</h2>
            <form>
              <label htmlFor="place">Name of start point:</label>
              <input
                name="start"
                onChange={this.handleChange}
                value={this.state.start}
              />
              <label htmlFor="place">Name of end point:</label>
              <input
                name="end"
                value={this.state.end}
                onChange={this.handleChange}
              />
            </form>
          </div>

          <div className="col2">
            <h2>Find points on map:</h2>
            <div id="map-container">
              <div id="map">
                <Map
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{height: '100%'}} />}
                  containerElement={<div style={{height: '400px'}} />}
                  mapElement={<div style={{height: '100%'}} />}
                />
              </div>

              {/* <Map google={this.props.google}zoom={8} style={mapStyles}
                            initialCenter={{lat:47.444, lng:-122.176}}/> */}
            </div>
          </div>
        </div>
        <div id="traffic-wrapper">
          <Traffic />
        </div>
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllRoutes)
