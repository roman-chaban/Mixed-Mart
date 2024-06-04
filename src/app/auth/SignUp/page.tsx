'use client';

import Image from 'next/image';
import styles from './SignUpStyles.module.scss';
import { useChangePageTitle } from '@/hooks/useChangePageTitle';
import { RegistrationForm } from '@/components/RegistrationForm/RegistrationForm';

export default function SignUp() {
  useChangePageTitle('Mixed Mart | SignUp');
  return (
    <section className={styles.signUp}>
      <div className={styles.signUp__container}>
        <div className={styles.signUp__flex}>
          <div className={styles.signUp__banner}>
            <Image
              priority
              src='/images/signUp-images/signUp.svg'
              alt='signUp banner'
              width={700}
              height={700}
              className={styles.signUp__image}
            />
          </div>
          <RegistrationForm
            title='Create an account'
            subTitle='Enter your details below'
            buttonTextPrimary='Create Account'
            buttonTextSecondary='Sign up with Google'
            alreadyTextTitle='Already have account?'
          />
        </div>
      </div>
    </section>
  );
}
