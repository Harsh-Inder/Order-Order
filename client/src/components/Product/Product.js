import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components";
import styles from "./product.module.css";
import { Link } from 'react-router-dom';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%; 
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <div className={styles.circle} />
      <img className={styles.img} src={item.img} />
      <Info>
        <div className={styles.icon}>
          <ShoppingCartOutlined />
        </div>
        <div className={styles.icon}>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </div>
        <div className={styles.icon}>
          <FavoriteBorderOutlined />
        </div>
      </Info>
    </Container>
  );
};

export default Product;