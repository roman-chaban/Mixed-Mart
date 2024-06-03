'use client';

import Image from 'next/image';
import styles from './SignUpStyles.module.scss';
import { Input } from '@/components/ui/Input/Input';
import { ChangeEvent, useState } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { Google } from 'grommet-icons';
import { useChangePageTitle } from '@/hooks/useChangePageTitle';
import Link from 'next/link';

interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {
  useChangePageTitle('Tech Wave | SignUp');

  const [formValues, setFormValues] = useState<SignUpProps>({
    name: '',
    email: '',
    password: '',
  });

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <section className={styles.signUp}>
      <div className={styles.signUp__container}>
        <div className={styles.signUp__flex}>
          <div className={styles.signUp__banner}>
            <Image
              priority
              src='./images/signUp/signUp.svg'
              alt='signUp banner'
              width={700}
              height={700}
              className={styles.signUp__image}
            />
          </div>
          <div className={styles.signUpForm__container}>
            <div className={styles.signUp__registrationBlock}>
              <div className={styles.signUp__registrationItems}>
                <h3 className={styles.create__title}>Create an account</h3>
                <p className={styles.create__subTitle}>
                  Enter your details below
                </p>
              </div>
            </div>
            <form className={styles.signUp__form}>
              <Input
                name='name'
                setValue={handleChangeValue}
                placeholder='Name'
                className={styles.signUp__input}
                value={formValues.name}
                type='text'
              />
              <Input
                name='email'
                setValue={handleChangeValue}
                placeholder='Email or Phone Number'
                className={styles.signUp__input}
                value={formValues.email}
                type='email'
              />
              <Input
                name='password'
                setValue={handleChangeValue}
                placeholder='Password'
                className={styles.signUp__input}
                value={formValues.password}
                type='password'
              />
            </form>
            <div className={styles.formButtons__block}>
              <Button type='submit' className={styles.submitButton}>
                Create Account
              </Button>
              <Button type='button' className={styles.signUpButton}>
                <Google color='plain' /> Sign up with Google
              </Button>
              <div className={styles.formButtonBlock__titles}>
                <span className={styles.already__title}>
                  Already have account?
                </span>
                <Link className={styles.logIn__link} href='/logIn'>
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
