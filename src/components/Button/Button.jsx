/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

function Button({ name, timeframe, setTimeframe }) {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (timeframe === name) {setActive(true)} else {setActive(false)}
  }, [name,timeframe]);

  const btnClass = classNames({
    [styles.active]: isActive,
  });

  function handleClick() {
    setActive(!isActive);
    setTimeframe(name)
  }

  return (
    <div className={styles.frame}>
      <button className={btnClass} onClick={handleClick}>
        {name}
      </button>
    </div>
  );
}

export default Button;
