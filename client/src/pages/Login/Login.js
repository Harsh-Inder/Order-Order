import { useState } from "react";
import styled from "styled-components";
import { login } from "../../redux/apiCalls";
//import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import styles from './login.module.css';

// const Wrapper = styled.div`
//   width: 25%;
//   padding: 20px;
//   background-color: white;
//   ${mobile({ width: "75%" })}
// `;

const Error= styled.span`
color:red;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>SIGN IN</h1>
        <form className={styles.form}>
          <input className={styles.input} placeholder="Username..."  onChange={(e) => setUsername(e.target.value)} />
          <input className={styles.input} placeholder="Password..." type="password"  onChange={(e) => setPassword(e.target.value)}/>
          <button className={styles.button} onClick={handleClick} disabled={isFetching}>LOGIN</button>
          {error && <Error>Something went wrong...</Error>} 
                   <a href={styles.link}> DON'T REMEMBER THE PASSWORD? </a>
          <a href={styles.link}> CREATE A NEW ACCOUNT </a>
        </form>
      </div>
    </div>
  );
};

export default Login;