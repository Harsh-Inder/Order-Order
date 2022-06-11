import { categories } from '../../data';
import CategoryItem from '../CategoryItem/CategoryItem';
import styles from './categories.module.css';

const Categories = () => {
  return (
    <div className={styles.container}>
        {categories.map((item) => (
            <CategoryItem item={item}/>
        ))}
    </div>
  )
}

export default Categories