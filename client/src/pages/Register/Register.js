import styled from "styled-components";
import { mobile } from "../../responsive";
import styles from './register.module.css';

// const Wrapper = styled.div`
//   width: 40%;
//   padding: 20px;
//   background-color: white;
//   ${mobile({ width: "75%" })}
// `;

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
        <form className={styles.form}>
          <input className={styles.input} placeholder="First Name" />
          <input className={styles.input} placeholder="Last Name" />
          <input className={styles.input} placeholder="Username" />
          <input className={styles.input} placeholder="Email" />
          <input className={styles.input} placeholder="Password" />
          <input className={styles.input} placeholder="Confirm Password" />
          <span className={styles.agreement}>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className={styles.button}> CREATE </button>
        </form>
      </div>
    </div>
  );
};

export default Register;