import React, { Component } from 'react'
import Avatar from 'avataaars'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faBriefcase, faLocationArrow, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const moods = {
  default: {
    eyeType: 'Happy',
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
  state = { mood: moods.default }

  componentDidMount() {
    this.setMood('default')
  }

  setMood(mood) {
    this.setState({
      mood: moods[mood]
    })
  }

  render() {
    const { accessoriesType, eyeType, mouthType } = this.state.mood
    return (
      <Layout>
        <main role='main' class='inner cover'>
          <div
            className='hero-container m-auto row justify-content-center align-items-center p-4'
            // onMouseOver={() => this.setMood('cool')}
            // onMouseLeave={() => this.setMood('default')}
          >
            <div className="person flex-column flex-sm-row text-center text-sm-left">
              <div class='avatar align-items-center text-center'>
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
              <div class='hero-title-container d-flex justify-content-center flex-column'>
                <h2 className='h2 text-light'>Hi, I'm Ayaan.</h2>
                <p className='text-light font-italic mb-5'>I specialise in Web Development as well as... </p>
                <div className="hastags text-light justify-content-center justify-content-sm-start">
                  <div>Web & App Design</div>
                  <div>SEO</div>
                  <div>React</div>
                  <div>Javascript</div>
                  <div>Branding</div>
                </div>
                <div className="occupation-container d-flex text-light h4 mt-4 justify-content-center justify-content-sm-end">
                  <div className="my-3 mr-4">
                    <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '7px', color: '#c57105' }} />
                    Software Engineer
                  </div>
                  <div className="my-3">
                    <FontAwesomeIcon icon={faMapMarker} style={{ marginRight: '7px', color: '#0ecade' }} />
                    Birmingham, UK
                  </div>
                </div>
                <div className="d-flex text-light justify-content-center justify-content-sm-end social-pills">
                  <a href="http://github.com//ayan2207" traget="_blank" className="social-item btn btn-dark">
                    <FontAwesomeIcon icon={faGithub} style={{ color: 'white' }}/>
                  </a>
                  <a href="https://www.instagram.com/ayaanhedayati/" traget="_blank" className="social-item btn btn-dark">
                    <FontAwesomeIcon icon={faInstagram} style={{ color: '#d2765a' }}/>
                  </a>
                  <a href="https://twitter.com/ayaanhedayati" traget="_blank" className="social-item btn btn-dark">
                    <FontAwesomeIcon icon={faTwitter} style={{ color: '#216af3' }}/>
                  </a>
                  <a href="https://www.linkedin.com/in/ayanhedayati/" traget="_blank" className="social-item btn btn-dark">
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: '#149cff' }}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='skills-container text-light'>
            <div className='container-fluid p-0'>
              <div className='row w-100 h-100 m-0'>
                <div class='col-12 col-md-6 col-xl-4'>
                  <div className='text-card'>
                    <div className='title'>What I Do</div>
                    <div className='subtitle'>Frontend Developer</div>
                    <p class='font-weight-light'>
                      I'm passionate about technology and have a love for design. Started my
                      journey of a Web Developer from hacking together MySpace themes at school to learning and developing complex
                      applications using the latest tech in the industry.
                    </p>
                    <p className='font-weight-light font-italic'>
                      This website is my little space on the internet where I'll showcase some of
                      the stuff I get up to through my journey.
                    </p>
                  </div>
                  <div className="text-card">
                    <div className='title pb-2'>Socials</div>
                    <div className="social-pills w-100">
                      <div className="social-item btn btn-dark">
                        <FontAwesomeIcon icon={faGithub} />
                      </div>
                      <div className="social-item btn btn-dark">
                        <FontAwesomeIcon icon={faInstagram} />
                      </div>
                      <div className="social-item btn btn-dark">
                        <FontAwesomeIcon icon={faTwitter} />
                      </div>
                      <div className="social-item btn btn-dark">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-12 col-md-6 col-xl-8 text-right'>
                  <div className='text-card text-left text-md-right'>
                    <div className='title'>Sometimes I Tweet</div>
                    <div className='subtitle'>
                      Follow me <a href='https://twitter.com/ayaanhedayati'>@ayaanhedayati</a>
                    </div>
                    <div className='tweet-timeline shadow-md'>
                      <TwitterTimelineEmbed
                        sourceType='profile'
                        screenName='ayaanhedayati'
                        theme='dark'
                        transparent
                        options={{ height: 300 }}
                      />
                    </div>
                  </div>
                </div>
                <div class='col-12 col-xl-4' />
                <div class='col-12 col-md-6 col-xl-4'>sdfsdfsdf</div>
                <div class='col-12 col-md-6 col-xl-4 text-right'>sdfsdfsf</div>
              </div>
            </div>
          </div> */}
        </main>
      </Layout>
    )
  }
}
