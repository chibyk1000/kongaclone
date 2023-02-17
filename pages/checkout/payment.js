import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import CheckoutForm from "../../components/CheckoutForm";
import { useEffect } from "react";
import axios from "axios";
import { SettingsApplicationsRounded } from "@mui/icons-material";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);




export default function App() {
const [items, setItems] = useState([])

    const  cart = useSelector((state) => state.cartSlice)


      const getTotalPrice = () => {
        return cart.reduce(
          (accumulator, item) =>
            accumulator +
            item.quantity *
              (item.discount_price > 0 ? item.discount_price : item.price),
          0
        );
      };

    useEffect(() => {
         
        if (cart) {
            const item = []
            cart.map((item => {
                console.log(item)
                items.push({title:item._id, price_bought:item.discount_price>0?item.discount_price:item.price, quantity:item.quantity })
            }))
      
          if (item) {
            setItems(item) 
    // axios.post('/api/cart', )
       }
        }
    },[cart])
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item:{items, total:getTotalPrice()} }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    return (
      <div className="py-20">
            
    <div className="App w-1/2 my-5 mx-auto border shadow-md p-4 rounded-md">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
      </div>
  );
}
