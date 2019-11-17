import React from 'react'
import {connect} from 'react-redux'
import {Map, GoogleApiWrapper} from 'google-maps-react'

let img_traffic1 =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImbcuZ4IKRzzrdOgE_odz5nbU9Lix8P9c42xZzKp_wRVj35_Y&s'
let img_traffic2 =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImbcuZ4IKRzzrdOgE_odz5nbU9Lix8P9c42xZzKp_wRVj35_Y&s'
let img_traffic3 =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImbcuZ4IKRzzrdOgE_odz5nbU9Lix8P9c42xZzKp_wRVj35_Y&s'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    // var service = new google.maps.DistanceMatrixService;
    //     service.getDistanceMatrix({
    //       origins: [{lat: 55.93, lng: -3.118}, 'Greenwich, England'],
    //       destinations: ['Stockholm, Sweden', {lat: 50.087, lng: 14.421}],
    //       travelMode: 'DRIVING',
    //       unitSystem: google.maps.UnitSystem.METRIC,
    //       avoidHighways: false,
    //       avoidTolls: false
    //     }, function(response, status) {
    //       console.log(response)
    //       console.log('---------------->')
    //       console.log('---------------->')
    //       console.log('---------------->')
    //       console.log('---------------->')
    //       console.log('---------------->')
    //       if (status !== 'OK') {
    //         alert('Error was: ' + status);
    //       } else {
    //         var originList = response.originAddresses;
    //         var destinationList = response.destinationAddresses;

    //         for (var i = 0; i < originList.length; i++) {
    //           var results = response.rows[i].elements;
    //           console.log('address', originList[i])

    //           for (var j = 0; j < results.length; j++) {
    //             console.log('address', destinationList[j])
    //             console.log(originList[i], ' to ', destinationList[j], ': ', results[j].distance.text ,' in ', results[j].duration.text);
    //           }
    //         }
    //       }
    //     });

    this.state = {
      lng: -74.009,
      lat: 40.705,
      zoom: 12
    }
  }
  componentDidMount() {}

  render() {
    return (
      <div className="flex-grid">
        <div className="col">
          <img src={img_traffic1} />
        </div>
        <div className="col">
          <img src={img_traffic1} />
        </div>
        <div className="col">
          <img src={img_traffic1} />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
