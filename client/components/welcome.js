import React from 'react'
import {connect} from 'react-redux'

let img_traffic1 =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImbcuZ4IKRzzrdOgE_odz5nbU9Lix8P9c42xZzKp_wRVj35_Y&s'
let img_traffic2 =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImbcuZ4IKRzzrdOgE_odz5nbU9Lix8P9c42xZzKp_wRVj35_Y&s'
let img_traffic3 =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImbcuZ4IKRzzrdOgE_odz5nbU9Lix8P9c42xZzKp_wRVj35_Y&s'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
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
