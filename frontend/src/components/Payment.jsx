import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51RyFYTGVG06Y99Huv9R9RgozRAeMLS0rYkwzmeYD4UxLd4HWi84IuT6iuaJZszgO7YUnJ1Suk37N5xMcD7NpNR6P00Fb2D67KL'); // Paste your Publishable key here

function Payment() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/stripe/create-checkout-session`, {
        product: { name: "Founders’ Lifetime Access", price: 1900 },
      });
      const session = response.data;
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error('Payment error:', error);
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="bg-[#1E3A8A] text-white px-4 py-2 rounded-md shadow-md"
      aria-label="Purchase Founders’ Lifetime Access"
    >
      {loading ? 'Processing...' : 'Buy Lifetime Access ($19)'}
    </button>
  );
}
export default Payment;