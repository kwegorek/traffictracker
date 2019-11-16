import React from 'react'
import {connect} from 'react-redux'
import {displayRoutes} from '../store/route'

const trafficsamples = [
  {
    timepoint: '2019-11-15T03:14:22.296011',
    travelTimeSeconds: 1,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T03:15:22.296011',
    travelTimeSeconds: 2,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T03:16:22.296011',
    travelTimeSeconds: 3,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T03:17:22.296011',
    travelTimeSeconds: 1,
    routeId: 1
  }
]

class Traffic extends React.Component {
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
    // await this.props.displayRoutes()
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
      <div>
        <h1>Traffic</h1>
        <h2>Traffic data:</h2>
        <div>
          {trafficsamples ? trafficsamples.map(el => el.timepoint) : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    // displayRoutes: () => dispatch(displayRoutes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Traffic)
