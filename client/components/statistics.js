import React from 'react'
import {connect} from 'react-redux'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis'
import {displayRoutes} from '../store/route'

class Statistics extends React.Component {
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
        <h1>Statistics:</h1>
        <div>
          <XYPlot width={300} height={300}>
            <HorizontalGridLines />
            <LineSeries data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]} />
            <XAxis />
            <YAxis />
          </XYPlot>
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

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)
