import React, { Component } from 'react';
import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
  StripeProvider,
  Elements,
} from 'react-stripe-elements';
import axios from 'axios'
import CurrencyInput from 'react-currency-input-field'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faLock, faSpinner, faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        lineHeight: '1.9',
        color: 'white',
        '::placeholder': {
          color: '#aab7c4',
        },
        ...(padding ? { padding } : {}),
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

class _SplitFieldsForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    amount: 0,
    formDisabled: false,
    processing: false,
    completed: false,
    errorMessage: null,
  };

  handleChange = (value, type) => {
    this.setState({ [type]: value })
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ formDisabled: true, processing: true })
    if (this.props.stripe) {
      this.props.stripe
        .createToken({
          name: this.state.firstname + " " + this.state.lastname
        })
        .then((payload) => {
          console.log('GOT TOKEN', payload)
          axios.post('https://d9lamk4oda.execute-api.us-east-1.amazonaws.com/dev/charges', {
            token: payload.token,
            charge: {
              amount: this.state.amount,
              currency: 'GBP',
            },
          }).then((res) => {
            console.log('CAHRGE', res)
            this.setState({ processing: false, completed: true })
          })
            .catch(function (error) {
              console.log(error);
            })
        });
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  render() {
    const { formDisabled } = this.state
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="row">
          <div className="col">
            <div class="form-group">
              <label>First name</label>
              <input disabled={formDisabled} required onChange={(e) => this.handleChange(e.target.value, 'firstname')} value={this.state.firstname} type="text" class="form-control bg-dark border-secondary" placeholder="First name" />
            </div>
          </div>
          <div className="col">
            <div class="form-group">
              <label>Last name</label>
              <input disabled={formDisabled} required onChange={(e) => this.handleChange(e.target.value, 'lastname')} value={this.state.lastname} type="text" class="form-control bg-dark border-secondary" placeholder="Last name" />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>Amount</label>
          <CurrencyInput
            id="input-example"
            placeholder="£0.00"
            className="form-control bg-dark border-secondary"
            onChange={(value) => this.handleChange(value, 'amount')}
            value={this.state.amount}
            disabled={formDisabled}
            prefix={'£'}
          />
        </div>
        <div className="form-group">
          <label>Card Number</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text border-secondary bg-dark text-light">
                <FontAwesomeIcon icon={faCreditCard} />
              </span>
            </div>
            <div className="form-control bg-dark border-secondary">
              <CardNumberElement
                disabled={formDisabled}
                {...createOptions(this.props.fontSize)}
              />
            </div>
            <div class="input-group-append">
              <span class="input-group-text border-secondary bg-dark text-light">
                <FontAwesomeIcon icon={faLock} />
              </span>
            </div>
          </div>
          <small id="emailHelp" class="form-text text-muted">16 digit number displayed on your card</small>
        </div>
        <div className="row">
          <div className="col">
            <div class="form-group">
              <label>Expiry Date</label>
              <div className="form-control bg-dark border-secondary">
                <CardExpiryElement
                  disabled={formDisabled}
                  {...createOptions(this.props.fontSize)}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div class="form-group">
              <label>CVC</label>
              <div className="form-control bg-dark border-secondary">
                <CardCVCElement
                  disabled={formDisabled}
                  required={true}
                  {...createOptions(this.props.fontSize)}
                />
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-secondary btn-block">
          Pay Now
          </button>
      </form>
    );
  }
}

const SplitFieldsForm = injectStripe(_SplitFieldsForm);

export default class SplitFieldsDemo extends Component {
  render() {
    return (
      <Elements>
        <SplitFieldsForm handleResult={this.props.handleResult} />
      </Elements>
    );
  }
}