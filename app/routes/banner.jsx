// app/routes/banner.jsx
import styles from "~/styles/banner.module.css";

export const loader = () => {
  return null; // no data needed
};

export default function Banner() {
  return (
    <div className={styles.banner}>
      🎉 Free Shipping on All Orders! 🎉
    </div>
  );
}
