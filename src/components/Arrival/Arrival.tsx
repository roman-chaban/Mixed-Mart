import type { FC } from "react";
import styles from './ArrivalStyles.module.scss';

export const Arrival: FC = () => {
   return <section className={styles.arrival}>
      <div className={styles.arrival__container}></div>
   </section>
}