/* eslint-disable react/prop-types */
import styles from "./Owner.module.css";
import Button from "../Button/Button";

function Owner({timeframe, setTimeframe}) {

  return (
    <section>
      <div className={styles.profile}>
        <img src="/images/image-jeremy.png" alt="Picture of the owner" />
        <h2>Report for</h2>
        <h1>Jeremy Robson</h1>
      </div>
      <div className={styles.selector}>
        <div className={styles.content}>
          <Button name="Daily" timeframe={timeframe} setTimeframe={setTimeframe}></Button>
          <Button name="Weekly" timeframe={timeframe} setTimeframe={setTimeframe}></Button>
          <Button name="Monthly" timeframe={timeframe} setTimeframe={setTimeframe}></Button>
        </div>
      </div>
    </section>
  );
}

export default Owner;
