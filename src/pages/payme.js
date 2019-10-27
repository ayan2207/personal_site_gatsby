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
  render() {
    return (
      <Layout {...this.props}>
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
                <CheckoutForm />
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
      return (
        <Payme {...skus} />
      )
    }}
  />
)