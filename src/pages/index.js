import React, { Component } from 'react'
import Avatar from 'avataaars'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import Layout from '../components/layout'

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

  componentDidMount () {
    this.setMood('default')
  }

  setMood (mood) {
    this.setState({
      mood: moods[mood]
    })
  }

  render () {
    const { accessoriesType, eyeType, mouthType } = this.state.mood
    return (
      <Layout>
        <main role='main' class='inner cover'>
          <div
            className='hero-container m-auto row justify-content-center'
            onMouseOver={() => this.setMood('cool')}
            onMouseLeave={() => this.setMood('default')}
          >
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
            <div class='d-flex align-items-center justify-content-center'>
              <h2 className='h2 text-light'>{`< Hi, I'm Ayaan />`}</h2>
            </div>
          </div>
          <div style={{ height: '700px' }} className='row skills-container text-light p-4'>
            <div className='container'>
              <div className='row w-100 h-100 m-0'>
                <div class='col-12 col-md-6 col-xl-4'>
                  <div className='text-card'>
                    <div className='title'>What I Do</div>
                    <div className='subtitle'>Frontend Developer</div>
                    <p class='font-weight-light'>
                      I'm passionate about technology and have a love for UX / UI design. Started my
                      journey of a web developer from hacking together MySpace themes for friends at
                      school to learning and developing Web Apps using the latest tech in the
                      industry.
                    </p>
                    <p className='font-weight-light font-italic'>
                      This website is my little space on the internet where I'll showcase some of
                      the stuff I get up to through my journey.
                    </p>
                  </div>
                  <div className='text-card'>
                    <div className='title'>Contact</div>
                    <div className='subtitle' />
                    <form name="contact" method="POST" data-netlify="true" action="/blog">
                      <div class='form-row'>
                        <div class='form-group col-md-12'>
                          <label for='inputName'>Name</label>
                          <input
                            type='text'
                            class='form-control'
                            id='inputName'
                            placeholder='Name'
                          />
                        </div>
                      </div>
                      <div class='form-group'>
                        <label for='inputMessage'>Message</label>
                        <textarea
                          type='text'
                          class='form-control'
                          id='inputMessage'
                          placeholder='Write me a message...'
                        />
                      </div>
                      <div class='form-row'>
                        <div class='form-group col-md-12'>
                          <label for='exampleFormControlSelect2'>Subject Matter</label>
                          <select class='form-control' id='exampleFormControlSelect2'>
                            <option>Just saying hi</option>
                            <option>Website Development</option>
                            <option>Mobile App Development</option>
                            <option>Content Managment</option>
                            <option>Ecommerce</option>
                            <option>SEO</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <button type='submit' class='btn btn-outline-dark text-white btn-block'>
                        Send
                      </button>
                    </form>
                  </div>
                </div>
                <div class='col-12 col-md-6 col-xl-8 text-right'>
                  <div className='text-card'>
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
                        options={{ height: 400 }}
                      />
                    </div>
                  </div>
                </div>
                <div class='col-12 col-xl-4' />
                <div class='col-12 col-md-6 col-xl-4'>sdfsdfsdf</div>
                <div class='col-12 col-md-6 col-xl-4 text-right'>sdfsdfsf</div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}
