import { useLocation } from 'react-router';
import { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer"
import styles from './productlist.module.css';

const ProductList = () => {

  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div className="container">
      <Navbar />
      <Announcement />
      <h1 className={styles.title}> {cat} </h1>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>
          <span className={styles.filterText}> Filter Products: </span>
          <select 
            name = "color"
            className={styles.select} 
            onChange={handleFilters}
          >
            <option disabled> Color </option>
            <option> white </option>
            <option> black </option>
            <option> red </option>
            <option> blue </option>
            <option> yellow </option>
            <option> green </option>
          </select>
          &nbsp;
          <select 
            name = "size"
            className={styles.select} 
            onChange={handleFilters}
          >
            <option disabled> Size </option>
            <option> XS </option>
            <option> S </option>
            <option> M </option>
            <option> L </option>
            <option> XL </option>
          </select>
        </div>
        <div className={styles.filter}>
          <span className={styles.filterText}> Sort Products: </span>
          <select 
            className={styles.select} 
            onChange={(e) => setSort(e.target.value)}
          >
            <option value='newest'> Newest </option>
            <option value='asc'> Low to High </option>
            <option value='desc'> High to Low </option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;