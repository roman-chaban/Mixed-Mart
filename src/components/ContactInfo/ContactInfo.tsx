

import type { FC } from 'react';
import styles from '@/assets/contact.module.scss';
import { MailOption, Phone } from 'grommet-icons';

export const ContactInfo: FC = () => {
  return (
    <div className={styles.contact__informationBlock}>
      <div className={styles.callToUs__block}>
        <div className={styles.callToUs__titles}>
          <span className={styles.callToUs__bgIcon}>
            <Phone color='white' />
          </span>
          <h4 className={styles.callToUs__title}>Call To Us</h4>
        </div>
        <address className={styles.callToUs__address}>
          <span className={styles.address}>
            We are available 24/7, 7 days a week.
          </span>
          <span className={styles.phone}>Phone: +8801611112222</span>
        </address>
      </div>
      <div className={styles.writeToUs__block}>
        <div className={styles.writeToUs__titles}>
          <span className={styles.writeToUs__bgIcon}>
            <MailOption color='white' />
          </span>
          <h4 className={styles.writeToUs__title}>Write To US</h4>
        </div>
        <address className={styles.writeToUs__address}>
          <span className={styles.address}>
            Fill out our form and we will contact you within 24 hours.
          </span>
          <span className={styles.email}>Emails: customer@exclusive.com</span>
          <span className={styles.email}>Emails: customer@exclusive.com</span>
        </address>
      </div>
    </div>
  );
};
