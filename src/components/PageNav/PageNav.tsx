'use client';

import { FC } from 'react';
import { styled } from 'styled-components';
import Link from 'next/link';
import styles from './PageNavStyles.module.scss';

interface PageNavProps {
  title: string;
}

const PageNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const HomeTitle = styled.h3`
  font-weight: 500;
  color: #000;
  line-height: 1.5;
`;

const PageNavTitle = styled.h4`
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.5;
`;

export const PageNav: FC<PageNavProps> = ({ title }) => {
  return (
    <PageNavContainer>
      <HomeTitle>
        <Link className={styles.home__link} href='/' style={{ color: 'black' }}>
          Home
        </Link>
      </HomeTitle>
      <PageNavTitle>{title}</PageNavTitle>
    </PageNavContainer>
  );
};
