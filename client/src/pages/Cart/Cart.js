import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { mobile } from "../../responsive";
import styles from './cart.module.css';
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
 import { userRequest } from "../../requestMethods";
 import { useHistory } from "react-router";

const KEY= process.env.REACT_APP_STRIPE;

// const Wrapper = styled.div`
//   padding: 20px;
//   ${mobile({ padding: "10px" })}
// `;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

// const TopTexts = styled.div`
//   ${mobile({ display: "none" })}
// `;

// const Bottom = styled.div`
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column" })}
// `;

// const Product = styled.div`
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column" })}
// `;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

// const ProductAmount = styled.div`
//   font-size: 24px;
//   margin: 5px;
//   ${mobile({ margin: "5px 15px" })}
// `;

// const ProductPrice = styled.div`
//   font-size: 30px;
//   font-weight: 200;
//   ${mobile({ marginBottom: "20px" })}
// `;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

// console.log(stripeToken);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <div className="container">

      <Navbar />
      <Announcement />
      <div className={styles.wrapper}>

        <h1 className={styles.title}>YOUR BAG</h1>

        <div className={styles.top}>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <div className={styles.topTexts}>
            <span className={styles.topText}>Shopping Bag(2)</span>
            <span className={styles.topText}>Your Wishlist (0)</span>
          </div>
          <TopButton type="filled"> CHECKOUT NOW </TopButton>
        </div>

        <div className={styles.bottom}>
          <div className={styles.info}>
{cart.products.map(product=>(


            <div className={styles.product}>
              <div className={styles.productDetail}>
                <img className={styles.img} src={product.img} />
                <div className={styles.details}>
                  <span className="productName">
                    <strong> Product: </strong> {product.title}
                  </span>
                  <span className="productId">
                    <strong> ID: </strong> {product._id}
                  </span>
                  <ProductColor color={product.color} />
                  <span className="productSize">
                    <strong> Size: </strong> {product.size}
                  </span>
                </div>
              </div>

              <div className={styles.priceDetail}>
                <div className={styles.productAmountContainer}>
                  <Add />
                  <div className={styles.productAmount}> {product.quantity} </div>
                  <Remove />
                </div>
                <div className={styles.productPrice}> ${product.price *product.quantity} </div>
              </div>
            </div>
))}

            <hr className={styles.hr} />


          </div>

          <div className={styles.summary}>
            <h1 className={styles.summaryTitle}> ORDER SUMMARY </h1>

            <SummaryItem>
              <span className="summaryItemText"> Subtotal </span>
              <span className="summaryItemPrice"> ${cart.total} </span>
            </SummaryItem>

            <SummaryItem>
              <span className="summaryItemText"> Estimated Shipping </span>
              <span className="summaryItemPrice"> $ 5.90 </span>
            </SummaryItem>

            <SummaryItem>
              <span className="summaryItemText"> Shipping Discount </span>
              <span className="summaryItemPrice"> $ -5.90 </span>
            </SummaryItem>

            <SummaryItem type="total">
              <span className="summaryItemText"> Total </span>
              <span className="summaryItemPrice"> $ {cart.total} </span>
            </SummaryItem>

            {/* <button className={styles.button}> CHECKOUT NOW </button> */}
            <StripeCheckout
              name="Order-Order"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button className={styles.button}>CHECKOUT NOW</button>
            </StripeCheckout>

          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Cart;