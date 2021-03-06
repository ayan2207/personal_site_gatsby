import React, { Component } from 'react'
import Avatar from 'avataaars'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import Layout from '../components/layout'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faBriefcase, faMapMarkerAlt, faMapMarker, faGlobeAmericas, faMobileAlt, faServer, faCode, faCamera, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import cmd from '../../static/cmd.jpg'
import webapp from '../../static/webapp.jpg'
import consultancy from '../../static/meeting.jpg'
import mobileApps from '../../static/mobileapps.jpg'
import cloudComputing from '../../static/cloudcomputing.jpeg'
import mediaProduction from '../../static/mediaproduction.jpg'

const moods = {
  default: {
    eyeType: 'Side',
    mouthType: 'Default',
    accessoriesType: 'Default'
  },
  cool: {
    eyeType: 'Hearts',
    mouthType: 'Smile',
    accessoriesType: 'Sunglasses'
  }
}
export default class IndexPage extends Component {
  state = { mood: moods.default, contact: null }

  componentDidMount() {
    this.setMood('default')
    if (typeof window !== undefined) {
      this.setState({ contact: JSON.parse(window.localStorage.getItem("contact")) })
    }
  }

  setMood(mood) {
    this.setState({
      mood: moods[mood]
    })
  }

  render() {
    const { accessoriesType, eyeType, mouthType } = this.state.mood
    const { contact } = this.state
    return (
      <Layout {...this.props}>
        <main role='main' className='inner cover'>
          <div className='hero-container m-auto row justify-content-center align-items-center p-4'>
            <div className="person flex-column flex-sm-row text-center text-sm-left">
              <div className='avatar align-items-center text-center'>
                <Avatar
                  avatarStyle='transparent'
                  topType='ShortHairShortFlat'
                  accessoriesType={accessoriesType}
                  hairColor='Black'
                  facialHairType='BeardLight'
                  facialHairColor='Black'
                  clotheType='Hoodie'
                  clotheColor='white'
                  eyeType={eyeType}
                  eyebrowType='DefaultNatural'
                  mouthType={mouthType}
                  skinColor='Light'
                  size='100px'
                />
              </div>
              <div className='hero-title-container d-flex justify-content-center flex-column'>
                <div className="title">
                  <h2 className='h2 text-light p-2 d-inline-block badge-primary rounded'>Hi {contact ? contact.name.split(' ')[0] : ''}, I'm Ayan.</h2>
                </div>
                <div className="subtitle">
                  <p className='p text-light p-2 mb-5 d-inline-block rounded'>I'm a Software Developer and have a passion for Design & Technology</p>
                </div>
                <div className="occupation-container d-flex text-light h4 mt-4 justify-content-center justify-content-sm-end">
                  <div className="my-3 mr-4">
                    <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '7px', color: '#c57105' }} />
                    Software Engineer
                  </div>
                  <div className="my-3">
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '7px', color: '#0ecade' }} />
                    Birmingham, UK
                  </div>
                </div>
                <div className="d-flex text-light justify-content-center justify-content-sm-end social-pills">
                  <a href="http://github.com//ayan2207" traget="_blank" className="social-item">
                    <FontAwesomeIcon icon={faGithub} className="github-icon" />
                  </a>
                  <a href="https://www.instagram.com/ayaanhedayati/" traget="_blank" className="social-item">
                    <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
                  </a>
                  <a href="https://twitter.com/ayaanhedayati" traget="_blank" className="social-item">
                    <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/ayanhedayati/" traget="_blank" className="social-item">
                    <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='skills-container p-3'>
            <div className="section text-light">
              <h3>Things we can talk about...</h3>
              <div className="grid">
                <Card className="bg-dark text-white">
                  <Card.Img src={webapp} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title><FontAwesomeIcon icon={faGlobeAmericas} /> Web Applications</Card.Title>
                  </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white">
                  <Card.Img src={mobileApps} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title><FontAwesomeIcon icon={faMobileAlt} /> Mobile Apps</Card.Title>
                  </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white">
                  <Card.Img src={cloudComputing} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title><FontAwesomeIcon icon={faServer} /> Serverless Technology</Card.Title>
                  </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white">
                  <Card.Img src={cmd} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title><FontAwesomeIcon icon={faCode} /> API Design</Card.Title>
                  </Card.ImgOverlay>
                </Card>sdfsdffs
                <Card className="bg-dark text-white">
                  <Card.Img src={consultancy} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title><FontAwesomeIcon icon={faUserTie} /> Consultancy</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
            </div>
          </div> */}
        </main>
      </Layout>
    )
  }
}
