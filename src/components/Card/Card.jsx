/* eslint-disable react/prop-types */
import styles from "./Card.module.css";

function Card({ data, timeframe }) {
  function displayCurrent() {
    switch (timeframe) {
      case "Weekly":
        return data.timeframes.weekly.current;
      case "Daily":
        return data.timeframes.daily.current;
      case "Monthly":
        return data.timeframes.monthly.current;
      default:
        console.log("error");
    }
  }

  function displayPrevious() {
    switch (timeframe) {
      case "Weekly":
        return `Last Week - ${data.timeframes.weekly.previous} hrs`;
      case "Daily":
        return `Last Day - ${data.timeframes.daily.previous} hrs`;
      case "Monthly":
        return `Last Month - ${data.timeframes.monthly.previous} hrs`;
      default:
        console.log("error");
    }
  }

  return (
    <section className={styles.section}>
      <div
        style={{ backgroundColor: data.color }}
        className={styles.illustration}
      >
        <img
          src={`${data.image}.svg`}
          className={styles.icon}
          alt={data.title}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1>{data.title}</h1>
          <img src="./images/icon-ellipsis.svg" alt="dots" />
          <h2
            className={styles.main}
          >{`${displayCurrent()}hrs`}</h2>
          <h2
            className={styles.sub}
          >{displayPrevious()}</h2>
        </div>
      </div>
    </section>
  );
}

export default Card;
