import React from 'react';
import styles from '@/components/Footer/FooterStyles.module.scss';
import { FC } from 'react';

interface FooterListProps {
  title: string;
  subTitles: { [key: string]: string }[];
}

export const FooterListItems: FC<FooterListProps> = ({ subTitles, title }) => {
  return (
    <div className={styles.menuList}>
      <h3 className={styles.menuList__title}>{title}</h3>
      <ul>
        {subTitles.map((subTitle, subIndex) => (
          <div key={subIndex} className={styles.linksBlock}>
            {Object.entries(subTitle).map(([label, path], linkIndex) => (
              <li key={linkIndex}>
                <a
                  target='_blank'
                  href={path}
                  rel='noopener noreferrer'
                  className={styles.menuList__link}
                >
                  {label}
                </a>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};
