import { Link } from 'react-router-dom';
import styles from './categoryItem.module.css';

const CategoryItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} className={styles.img}/>
        <div className={styles.info}>
            <div className={styles.title}> {item.title} </div>
            <button className={styles.button}> SHOP NOW </button>
        </div>
      </Link>
    </div>
  )
}

export default CategoryItem