import React from 'react'
import {connect} from 'react-redux'
import {deleteRouteThunk, displayOneRoute} from '../store/routes'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {Statistics} from '../components/statistics'

class SingleRoute extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    // console.log(this.props.route.id)
  }

  render() {
    return (
      <div id="singleRoute">
        <div className="description-container">
          <h2>Name of route:</h2>
          <div>Name of start point:</div>
          <div>Name of endpoint:</div>
        </div>
        <div>
          <button type="submit" onClick={() => this.props.deleteRouteThunk()}>
            Remove
          </button>
        </div>
        <div>{/* <Statistics route={this.props.route}/> */}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    //   route:state.route.route
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteRouteThunk: id => dispatch(deleteRouteThunk(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRoute)
