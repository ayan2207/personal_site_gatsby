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
import { faCreditCard, faLock, faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

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

class CheckoutForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    amount: 0,
    cardNumber: null,
    cardExpiry: null,
    cardCvc: null,
    formDisabled: false,
    processing: false,
    completed: false,
    errorMessage: null,
    errors: {
      firstname: null,
      lastname: null,
      amount: null,
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
    }
  };

  handleChange = (value, type) => {
    var cardTypes = ["cardNumber", "cardExpiry", "cardCvc"];
    if (cardTypes.includes(type)) {
      if (!value.empty) {
        this.setState({ [type]: 'xxxx' })
      }
      if (value.error) {
        this.setState({ errors: { ...this.state.errors, [type]: value.error.message } })
      } else this.setState({ errors: { ...this.state.errors, [type]: null } })
    } else {
      this.setState({ [type]: value }, () => {
        if (this.state.errors[type]) {
          if (value) this.setState({ errors: { ...this.state.errors, [type]: null } })
        }
      })
    }
  };

  validateField = () => {
    console.log('validating')
    return new Promise((resolve) => {
      let errors = {
        ...this.state.errors,
        firstname: null,
        lastname: null,
        amount: null,
      }
      const { firstname, lastname, amount, cardCvc, cardNumber, cardExpiry } = this.state
      if (!firstname || firstname.length === 0) {
        errors.firstname = "Firstname cannot be empty"
      }
      if (!lastname || lastname.length === 0) {
        errors.lastname = "Lastname cannot be empty"
      }
      if (!amount || amount === 0) {
        errors.amount = "Enter amount greater than 0"
      }
      if (!cardCvc || cardCvc.length === 0) {
        errors.cardCvc = "CVC cannot be empty"
      }
      if (!cardNumber || cardNumber.length === 0) {
        errors.cardNumber = "Card number cannot be empty"
      }
      if (!cardExpiry || cardExpiry.length === 0) {
        errors.cardExpiry = "Expiry cannot be empty"
      }
      this.setState({ errors }, () => {
        console.log('state done')
        return resolve()
      })
    });
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    await this.validateField()
    console.log('validated')
    const hasErrors = !Object.values(this.state.errors).every(o => o === null);
    console.log(hasErrors)
    if (!hasErrors) {
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
              setTimeout(() => {
                this.setState({ processing: false, completed: true })
              }, 2000)
            })
              .catch(function (error) {
                console.log(error);
              })
          });
      } else {
        console.log("Stripe.js hasn't loaded yet.");
      }
    }
  };

  render() {
    const { formDisabled, completed, errors, processing } = this.state
    if (completed) return (
      <div className="d-flex justify-content-center align-items-center flex-column text-center">
        <FontAwesomeIcon icon={faCheckCircle} className="text-success" style={{ fontSize: '66px' }} />
        <h3 className="m-4">Payment Sent!</h3>
        <small class="form-text text-muted">Thank you for submitting your payment, a reciept will be sent out to you via email.</small>
      </div>
    )
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>First name</label>
              <input
                disabled={formDisabled}
                onChange={(e) => this.handleChange(e.target.value, 'firstname')}
                value={this.state.firstname}
                type="text"
                className={`form-control bg-dark border-secondary ${errors.firstname && 'is-invalid'} `}
                placeholder="First name"
              />
              {errors.firstname && <span class="badge badge-pill badge-danger my-3">{errors.firstname}</span>}
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Last name</label>
              <input
                disabled={formDisabled}
                onChange={(e) => this.handleChange(e.target.value, 'lastname')}
                value={this.state.lastname}
                type="text"
                className={`form-control bg-dark border-secondary ${errors.lastname && 'is-invalid'} `}
                placeholder="Last name"
              />
              {errors.lastname && <span class="badge badge-pill badge-danger my-3">{errors.lastname}</span>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Amount</label>
          <CurrencyInput
            id="input-example"
            placeholder="£0.00"
            className={`form-control bg-dark border-secondary ${errors.amount && 'is-invalid'} `}
            onChange={(value) => this.handleChange(value, 'amount')}
            value={this.state.amount}
            disabled={formDisabled}
            prefix={'£'}
          />
          {errors.amount && <span class="badge badge-pill badge-danger my-3">{errors.amount}</span>}
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
                onChange={(value) => this.handleChange(value, 'cardNumber')}
                disabled={formDisabled}
                {...createOptions(this.props.fontSize)}
              />
            </div>
            <div className="input-group-append">
              <span className="input-group-text border-secondary bg-dark text-light">
                <FontAwesomeIcon icon={faLock} />
              </span>
            </div>
          </div>
          <small id="emailHelp" class="form-text text-muted">16 digit number displayed on your card</small>
          {errors.cardNumber && <span class="badge badge-pill badge-danger my-3">{errors.cardNumber}</span>}
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label>Expiry Date</label>
              <div className="form-control bg-dark border-secondary">
                <CardExpiryElement
                  onChange={(value) => this.handleChange(value, 'cardExpiry')}
                  disabled={formDisabled}
                  {...createOptions(this.props.fontSize)}
                />
              </div>
              {errors.cardExpiry && <span class="badge badge-pill badge-danger my-3">{errors.cardExpiry}</span>}
            </div>
          </div>
          <div className="col-sm-6">
            <div class="form-group">
              <label>CVC</label>
              <div className="form-control bg-dark border-secondary">
                <CardCVCElement
                  onChange={(value) => this.handleChange(value, 'cardCvc')}
                  disabled={formDisabled}
                  required={true}
                  {...createOptions(this.props.fontSize)}
                />
              </div>
              {errors.cardCvc && <span class="badge badge-pill badge-danger my-3">{errors.cardCvc}</span>}
            </div>
          </div>
        </div>
        <button disabled={processing} className={`btn ${completed ? `btn-success` : 'btn-secondary'} btn-block`}>
          {completed ? 'Payment Complete!' : 'Pay Now'}
          {processing && <div className="float-right">
            <FontAwesomeIcon icon={faSpinner} spin />
          </div>}
        </button>
      </form>
    );
  }
}

const WrappedCheckoutForm = injectStripe(CheckoutForm);

export default class StripeCheckoutForm extends Component {
  render() {
    return (
      <Elements>
        <WrappedCheckoutForm handleResult={this.props.handleResult} />
      </Elements>
    );
  }
}