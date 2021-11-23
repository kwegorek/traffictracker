
/* eslint-disable react/button-has-type */
import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

import DemoDistance from '../components/demodistance'
import {displayTrafficSamples} from '../store/trafficsample'

class Tutorial extends React.Component {
  render() {
    return (
      <div>
        <section>
          <img
            style={{height: 'auto', maxWidth: '100%'}}
            className="mySlides"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Painted_Ladies_San_Francisco_January_2013_panorama_2.jpg/2880px-Painted_Ladies_San_Francisco_January_2013_panorama_2.jpg"
          />
        </section>

        <section className="w3-container w3-center w3-content">
          <h2 className="w3-wide">Find the best location for a new home!</h2>
          <p className="w3-opacity">
            <i>Value your time</i>
          </p>
          <p className="w3-justify-center main-description">
            With TrafficTracker
            you will see how much time over a month you may spend on commute eg. from
            a new house to work. On a graph you may check in details how traffic changes during a day. 
          </p>
        </section>

        <section className="w3-row-padding w3-center w3-light-grey">
          {[
            {
              title: 'Find your dream house location',
              icon: 'home',
              class: 'material-icons',
              img: './img/demo_route_rs.png',
              description:
                'I found a nice house in Philadelphia, but how long would it take me to go from my new home to my work?'
            },
            {
              title:
                'Add your current location and a point on a map for tracking',
              icon: 'add_circle_outline',
              class: 'material-icons',
              img: './img/add_route.png',
              description:
                'It only takes 1 hr and 30 minutes to my dream house in Philadelphia from Times Square. But it is 4 am in the morning. I want to have a commute pattern in long term.'
            },
            {
              title: 'Log into account and get results!',
              icon: 'playlist_add_check',
              class: 'material-icons',
              img: './img/loginscreen.png',
              description:
                'After two weeks get a generated report on commute pattern for a chosen location.'
            }
          ].map((el, indx) => (
            <article key={indx} className="w3-third box-card">
              <div className="step-icon">
                <div className="w3-third box-card-inner">
                  {' '}
                  <i
                    style={{width: '40px', fontSize: '50px'}}
                    className="material-icons"
                  >
                    {el.icon}
                  </i>
                  <p className="box-item title-box"> {el.title}</p>
                  <img
                    src={el.img}
                    style={{width: '280px'}}
                    alt="Random Name"
                  />
                  <p className="step-description">{el.description}</p>
                  <div
                    className="watch-demo"
                    style={{marginTop: '4px', fontSize: '16px'}}
                  >
                    <div
                      className="watch-demo-container"
                      onClick={() => console.log('')}
                    >
                      <span>
                        <a style={{color: 'black'}} href="#live-demo">
                          Try demo{' '}
                        </a>
                      </span>
                      <i style={{fontWeight: 700}} className="material-icons">
                        play_circle_outline
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      
        <div id="live-demo" className="demodistance-container">
          <DemoDistance />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    // samples: state.trafficsample.trafficsamples
    //   .map(item => ({x: new Date(item.timepoint), y: item.travelTimeSeconds}))
    //   .sort((a, b) => (a.x > b.x ? 1 : -1))
    samples: state.trafficsample.trafficsamples.map((item, indx) => ({
      x: indx,
      y: item.travelTimeSeconds
    }))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayTrafficSamples: routeId => dispatch(displayTrafficSamples(routeId))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Tutorial)
)
