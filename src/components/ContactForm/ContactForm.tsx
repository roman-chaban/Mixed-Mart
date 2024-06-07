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
          name='name'
          value={formValues.name}
          onChange={handleChangeFormValues}
        />
        <Input
          className={styles.formInput}
          placeholder='Your Email'
          type='email'
          name='email'
          value={formValues.email}
          onChange={handleChangeFormValues}
        />
        <Input
          className={styles.formInput}
          placeholder='Your Phone'
          type='number'
          name='phone'
          value={formValues.phone}
          onChange={handleChangeFormValues}
        />
      </div>
      <TextArea
        className={styles.from__textArea}
        placeholder='Your Message'
        name='areaValue'
        value={formValues.areaValue}
        onChange={handleChangeFormValues}
      />
      <Button type='button' className={styles.form__sendButton}>
        Send Message
      </Button>
    </form>
  );
};
