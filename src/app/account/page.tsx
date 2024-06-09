import Link from 'next/link';
import styles from './AccountStyles.module.scss';
import { AccountSideBar } from '@/components/AccountSideBar/AccountSideBar';
import { AccountForm } from '@/components/AccountForm/AccountForm';

export default function Account() {
  return (
    <section className={styles.account}>
      <div className={styles.account__container}>
        <div className={styles.account__navBlock}>
          <div className={styles.account__titles}>
            <Link href='/' className={styles.home__link}>
              Home
            </Link>
            <h5 className={styles.account__title}>Account</h5>
          </div>
          <span className={styles.userAuth__title}>Welcome dear user!</span>
        </div>
        <div className={styles.accountInformation__block}>
          <AccountSideBar />
          <AccountForm />
        </div>
      </div>
    </section>
  );
}
