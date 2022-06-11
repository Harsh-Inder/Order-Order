import { Send } from "@material-ui/icons";
import styles from './newsletter.module.css';

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Newsletter</h1>
      <div className={styles.desc}>Get timely updates from your favorite products.</div>
      <div className={styles.inputContainer}>
        <input className={styles.input} placeholder="Enter Email..." />
        <button className={styles.button}>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;