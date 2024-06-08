'use client';

import { ChangeEvent, useState, type FC } from 'react';
import styles from '@/app/auth/SignUp/SignUpStyles.module.scss';
import { Input } from '../ui/Input/Input';
import { Button } from '../ui/Button/Button';
import { Google } from 'grommet-icons';
import Link from 'next/link';

interface RegistrationFormProps {
  title: string;
  subTitle: string;
  buttonTextPrimary: string;
  buttonTextSecondary: string;
  alreadyTextTitle: string;
}

export const RegistrationForm: FC<RegistrationFormProps> = ({
  title,
  subTitle,
  buttonTextPrimary,
  buttonTextSecondary,
  alreadyTextTitle,
}) => {
  const [formValues, setFormValues] = useState({
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
    <div className={styles.signUpForm__container}>
      <div className={styles.signUp__registrationBlock}>
        <div className={styles.signUp__registrationItems}>
          <h3 className={styles.create__title}>{title}</h3>
          <p className={styles.create__subTitle}>{subTitle}</p>
        </div>
      </div>
      <form className={styles.signUp__form}>
        <Input
          name='name'
          onChange={handleChangeValue}
          placeholder='Name'
          className={styles.signUp__input}
          value={formValues.name}
          type='text'
        />
        <Input
          name='email'
          onChange={handleChangeValue}
          placeholder='Email or Phone Number'
          className={styles.signUp__input}
          value={formValues.email}
          type='email'
        />
        <Input
          name='password'
          onChange={handleChangeValue}
          placeholder='Password'
          className={styles.signUp__input}
          value={formValues.password}
          type='password'
        />
      </form>
      <div className={styles.formButtons__block}>
        <Button type='submit' className={styles.submitButton}>
          {buttonTextPrimary}
        </Button>
        <Button type='button' className={styles.signUpButton}>
          <Google color='plain' /> {buttonTextSecondary}
        </Button>
        <div className={styles.formButtonBlock__titles}>
          <span className={styles.already__title}>{alreadyTextTitle}</span>
          <Link className={styles.logIn__link} href='/auth/SignIn'>
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};
