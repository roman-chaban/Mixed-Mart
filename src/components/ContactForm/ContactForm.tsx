'use client';

import { ChangeEvent, useState, type FC } from 'react';
import styles from './ContactFormStyles.module.scss';
import { Input } from '@/components/ui/Input/Input';
import { TextArea } from '@/components/ui/TextArea/TextArea';
import { Button } from '../ui/Button/Button';

export const ContactForm: FC = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    areaValue: '',
  });

  const handleChangeFormValues = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };
  return (
    <form action='' className={styles.contact__form}>
      <div className={styles.formInputs__block}>
        <Input
          className={styles.formInput}
          placeholder='Your Name'
          type='text'
          value={formValues.name}
          setValue={handleChangeFormValues}
        />
        <Input
          className={styles.formInput}
          placeholder='Your Email'
          type='email'
          value={formValues.email}
          setValue={handleChangeFormValues}
        />
        <Input
          className={styles.formInput}
          placeholder='Your Phone'
          type='number'
          value={formValues.phone}
          setValue={handleChangeFormValues}
        />
      </div>
      <TextArea
        setValue={handleChangeFormValues}
        className={styles.from__textArea}
        placeholder='Your Massage'
        name='message'
        value={formValues.areaValue}
      />
      <Button type='button' className={styles.form__sendButton}>
        Send Massage
      </Button>
    </form>
  );
};
