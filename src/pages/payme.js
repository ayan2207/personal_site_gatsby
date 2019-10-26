import React from 'react'
import { StaticQuery, useStaticQuery, graphql } from "gatsby"
import ProductItem from '../components/productItem'
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from '../components/CheckoutForm';
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheck, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'
import { faStripe } from '@fortawesome/free-brands-svg-icons';

class Payme extends React.Component {
  state = {
    stripe: null
  }

  componentDidMount() {
    const stripe = window.Stripe(process.env.GATSBY_STRIPE_PUBLIC_KEY)
    this.setState({ stripe })
  }

  render() {
    return (
      <Layout>
        <div className="payment-container d-flex">
          <div className="form-container bg-dark m-auto">
            <div class="card text-white bg-dark">
              <div className="card-header bg-primary">
                <h5 className="m-0">
                  <FontAwesomeIcon icon={faMoneyCheckAlt} style={{ marginRight: '10px' }} />
                  PayMe Secure Payment
                </h5>
              </div>
              <div class="card-body">
                <StripeProvider stripe={this.state.stripe}>
                  <Elements>
                    <>
                      <p class="quote mb-4 p-2">Use this payment form to send me funds. Please only use this form if you have been advised.</p>
                      <CheckoutForm />
                    </>
                  </Elements>
                </StripeProvider>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}


export default () => (
  <StaticQuery
    query={graphql`
      query SkusForProduct {
        skus: allStripeSku {
          edges {
            node {
              id
              currency
              price
              attributes {
                name
              }
            }
          }
        }
      }
    `}
    render={(skus) => {
      console.log('GOT THE SKUS', skus)
      return (
        <Payme {...skus} />
      )
    }}
  />
)