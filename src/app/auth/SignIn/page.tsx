'use client';

import { useChangePageTitle } from '@/hooks/useChangePageTitle';
import styles from './SignInStyles.module.scss';
import { RegistrationForm } from '@/components/RegistrationForm/RegistrationForm';
import Image from 'next/image';

export default function SignIn() {
  useChangePageTitle('Mixed Market | SignIn');
  return (
    <section className={styles.signIn}>
      <div className={styles.signIn__container}>
        <div className={styles.signIn__flex}>
          <div className={styles.signIn__banner}>
            <Image
              priority
              src='/images/signUp-images/signUp.svg'
              alt='signUp banner'
              width={700}
              height={700}
              className={styles.signIn__image}
            />
          </div>
          <RegistrationForm
            title='Log in to Exclusive'
            subTitle='Enter your details below'
            buttonTextPrimary='Log In'
            buttonTextSecondary='Sign In with Google'
            alreadyTextTitle='Already have account?'
          />
        </div>
      </div>
    </section>
  );
}
