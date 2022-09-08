import { fbq } from 'react-facebook-pixel';

export const addToCart = () => {
  fbq('track', 'AddToCart');
};

export const checkOut = () => {
  fbq('track', 'InitiateCheckout');
};

export const pageView = () => {
  fbq('track', 'ViewContentw');
};
