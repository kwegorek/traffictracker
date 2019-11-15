import React from 'react'
import {connect} from 'react-redux'
import {displayRoutes} from '../store/route'

class Instruction extends React.Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(Instruction)
