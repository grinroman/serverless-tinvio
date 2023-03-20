import React from 'react';

import { HeaderLogo } from 'src/components/atoms/HeaderLogo';
import { LocalesDropdown } from '../LocalesDropdown';

import styles from './theheader.module.scss';

type TheHeaderProps = {};

export const TheHeader: React.FC<TheHeaderProps> = ({}) => {
  return (
    <header className={styles.root}>
      <div className={styles.root__wrapper}>
        <div className={styles.root__wrapperLogolocal}>
          <HeaderLogo />
          <LocalesDropdown />
        </div>
      </div>
    </header>
  );
};
