import styles from '@/assets/contact.module.scss';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import { ContactInfo } from '@/components/ContactInfo/ContactInfo';
import { MailOption, Phone } from 'grommet-icons';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mixed Mart | Contact',
};

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__block}>
          <h3 className={styles.contact__title}>
            <Link className={styles.contact__link} href='/'>
              Home
            </Link>{' '}
            / Contact
          </h3>
        </div>
        <div className={styles.contact__fromContainer}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
