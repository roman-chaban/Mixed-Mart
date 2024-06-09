'use client';

import { ChangeEvent, useState, type FC } from 'react';
import styles from './AccountFormStyles.module.scss';
import { Input } from '../ui/Input/Input';
import { Button } from '../ui/Button/Button';
import { useChangePageTitle } from '@/hooks/useChangePageTitle';

interface AccountForm {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const AccountForm: FC = () => {
  useChangePageTitle('Mixed Mart | Account');
  const [accountFormValues, setIsAccountFormValues] = useState<AccountForm>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChangeAccountFormValues = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setIsAccountFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className={styles.accountForm}>
      <h2 className={styles.accountForm__title}>Edit Your Profile</h2>
      <form className={styles.accountForm__container}>
        <div className={styles.accountForm__inputsBlock}>
          <label htmlFor='firstName' className={styles.account__label}>
            FirstName
            <Input
              className={styles.account__input}
              value={accountFormValues.firstName}
              onChange={handleChangeAccountFormValues}
              type='text'
              placeholder='FirstName'
              name='firstName'
            />
          </label>
          <label htmlFor='lastName' className={styles.account__label}>
            LastName
            <Input
              className={styles.account__input}
              value={accountFormValues.lastName}
              onChange={handleChangeAccountFormValues}
              type='text'
              placeholder='LastName'
              name='lastName'
            />
          </label>
          <label htmlFor='email' className={styles.account__label}>
            Email
            <Input
              className={styles.account__input}
              value={accountFormValues.email}
              onChange={handleChangeAccountFormValues}
              type='email'
              placeholder='Email'
              name='email'
            />
          </label>
          <label htmlFor='address' className={styles.account__label}>
            Address
            <Input
              className={styles.account__input}
              value={accountFormValues.address}
              onChange={handleChangeAccountFormValues}
              type='text'
              placeholder='Address'
              name='address'
            />
          </label>
        </div>
        <div className={styles.account__passwordOptions}>
          <label htmlFor='' className={styles.password__label}>
            Password Changes
            <Input
              name='currentPassword'
              type='password'
              className={styles.input__password}
              placeholder='Current Password'
              value={accountFormValues.currentPassword}
              onChange={handleChangeAccountFormValues}
            />
            <Input
              name='newPassword'
              type='password'
              className={styles.input__password}
              placeholder='New Password'
              value={accountFormValues.newPassword}
              onChange={handleChangeAccountFormValues}
            />
            <Input
              name='confirmPassword'
              type='password'
              className={styles.input__password}
              placeholder='Confirm New Password'
              value={accountFormValues.confirmPassword}
              onChange={handleChangeAccountFormValues}
            />
          </label>
        </div>
        <div className={styles.accountButtons}>
          <Button
            type='button'
            className={`${styles.account__button} ${styles.account__cancel}`}
          >
            Cancel
          </Button>
          <Button type='submit' className={styles.account__button}>
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};
