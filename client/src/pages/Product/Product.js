import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import styles from './product.module.css';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartRedux";

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const Product = () => {

  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/"+id)
        setProduct(res.data);
      } catch (err) {}
    }
    getProduct()
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };
  

  return (
    <div className="container">
      <Navbar />
      <Announcement />
      <div className={styles.wrapper}>

        <div className={styles.imgContainer}>
          <img className={styles.img} src={product.img} />
          {/* <img className={styles.img} src="https://i.ibb.co/S6qMxwr/jean.jpg" /> */}
        </div>

        <div className={styles.infoContainer}>
          <h1 className={styles.title}> {product.title} </h1>
          <p className={styles.desc}> {product.desc} </p>
          <span className={styles.price}> $ {product.price} </span>

          <div className={styles.filterContainer}>

            <div className={styles.filter}>
              <span className={styles.filterTitle}> Color </span>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
              ))}
            </div>

            <div className={styles.filter}>
              <span className={styles.filterTitle}> Size </span>
              <select 
                className={styles.filterSize} 
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((s) => (
                  <option className="filterSizeOption" key={s}> {s} </option>
                ))}
              </select>
            </div>

          </div>

          <div className={styles.addContainer}>

            <div className={styles.amountContainer}>
              {/* <Remove /> */}
              <i 
                class="fa-solid fa-minus" 
                onClick={() => handleQuantity("dec")}
              ></i>
              <span className={styles.amount}> {quantity} </span>
              {/* <Add /> */}
              <i 
                class="fa-solid fa-plus"
                onClick={() => handleQuantity("inc")}
              ></i>
            </div>

            <button className={styles.button} onClick={handleClick}> ADD TO CART </button>
          </div>

        </div>

      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;