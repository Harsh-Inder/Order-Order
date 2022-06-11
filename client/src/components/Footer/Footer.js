import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import styles from './footer.module.css';
  
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <div className={styles.container}>

        <div className={styles.left}>
          <h1> Order-Order </h1>
          <div className={styles.desc}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </div>
          <div className={styles.socialContainer}>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </div>
        </div>


        <div className={styles.center}>
          <h3 className={styles.title}>Useful Links</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Home</li>
            <li className={styles.listItem}>Cart</li>
            <li className={styles.listItem}>Man Fashion</li>
            <li className={styles.listItem}>Woman Fashion</li>
            <li className={styles.listItem}>Accessories</li>
            <li className={styles.listItem}>My Account</li>
            <li className={styles.listItem}>Order Tracking</li>
            <li className={styles.listItem}>Wishlist</li>
            <li className={styles.listItem}>Wishlist</li>
            <li className={styles.listItem}>Terms</li>
          </ul>
        </div>

        <div className={styles.right}>
          <h3 className={styles.title}>Contact</h3>
          <div className={styles.contactItem}>
            <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
          </div>
          <div className={styles.contactItem}>
            <Phone style={{marginRight:"10px"}}/> +1 234 56 78
          </div>
          <div className={styles.contactItem}>
            <MailOutline style={{marginRight:"10px"}} /> contact@order.order
          </div>
          <img className={styles.payment} src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>

    </div>
  );
};
  
export default Footer;