import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { useSetting } from 'hooks/useSetting';
import useToast from 'hooks/useToast';

const CURRENCY = 'USD';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + '/api'
});

// Set the Authorization header with the token
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Checkout = ({ description, amount, crypto_amount, wallet_address, stripeRef, children }) => {
  const { showToast } = useToast();
  const setting = useSetting();
  const fromEuroToCent = (amount) => Number(Number(amount * 100).toFixed(1));
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  console.log('---------------------- ', description, amount, crypto_amount, stripeRef)
  const successPayment = async (data) => {
    showToast(
      `Sent Invoice for ${amount}$ to Your Email, Please Confirm!`,
      'success'
    );
    let temp_arr = [];

    // await instance
    //   .post(`/transaction/`, temp_arr)
    //   .then(async (res) => {
    //     if (res.status === 201) {
    //       showToast(
    //         `Deposited Successfully! We'll check and send you product soon!`,
    //         'success'
    //       );
    //     }
    //   })
    //   .catch((err) => {
    //     showToast(err.response.data.message, 'error');
    //     console.log(err);
    //   });
  };

  const errorPayment = (data) => {
    showToast(
      data?.response?.data?.error?.raw?.message
        ? data?.response?.data?.error?.raw?.message
        : 'Payment Error',
      'error'
    );
  };

  const onToken = (amount, crypto_amount, wallet_address, description) => (token) =>
    instance
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/transaction/`, {
        description,
        source: token,
        currency: CURRENCY,
        amount: fromEuroToCent(amount),
        crypto_amount: crypto_amount,
        wallet_address: wallet_address
      })
      .then((data) => {
        return successPayment(data);
      })
      .catch((data) => {
        return errorPayment(data);
      });
  if (setting.isLoading || StripeCheckout === undefined) <></>;
  return (
    <div>
      {console.log("dddddddddddddddddd", amount)}
      <StripeCheckout
        name={'Payment'}
        description={'Description'}
        // amount={fromEuroToCent(amount)}
        amount={fromEuroToCent(amount)}
        card
        token={onToken(amount, crypto_amount, wallet_address, description)}
        currency={CURRENCY}
        image={process.env.PUBLIC_URL + '/logo192.png'}
        stripeKey={
          setting?.data?.data?.is_payment_test ||
            setting?.data?.data?.is_payment_test === undefined
            ? process.env.REACT_APP_STRIPE_TEST_PUBLISHABLE
            : process.env.REACT_APP_STRIPE_LIVE_PUBLISHABLE
        }
      >
        <button className="hidden" ref={stripeRef}>
          Use your own child component, which gets wrapped in whatever component
          you pass into as "ComponentClass" (defaults to span)
        </button>
      </StripeCheckout>
      {children}
    </div>
  );
};

export default Checkout;
