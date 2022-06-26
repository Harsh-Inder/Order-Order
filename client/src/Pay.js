import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import axios from 'axios';

const KEY = "pk_test_51L7QZdSDpLa5OsHWRHw483ZrSRkm762JzLt1W1Ij2bFXTBqPWxUrlKcItOfj5SxQfOYsHGXXhuzLZBVBtraS28RI00ZdzefwbX"

const Pay = () => {

  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment", 
          {
            tokenId: stripeToken.id,
            amount: 3000,
          }
        );
        console.log(res.data);
        history.push('/success');
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);
  

  return (
    <div 
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {stripeToken ? (
      <span> Processing, Please Wait...</span>
      ) : ( 
        <StripeCheckout 
          name="Order shop" 
          image="https://images.unsplash.com/photo-1603880921125-88ce2fc04673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          billingAddress
          shippingAddress
          description=" Total Amount is $30 "
          amount={3000}
          token={onToken}
          stripeKey={KEY}
        >
          <button 
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  )
}

export default Pay