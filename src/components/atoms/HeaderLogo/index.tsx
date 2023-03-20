import React from 'react';

import OctopusLogo from 'public/images/svgs/octopus-logo.svg';
import MainTextLogo from 'public/images/svgs/main-text-logo.svg';

import styles from './headerlogo.module.scss';

type HeaderLogoProps = {};

export const HeaderLogo: React.FC<HeaderLogoProps> = ({}) => {
  return (
    <div className={styles.root}>
      <div className={styles.root__octopus}>
        <OctopusLogo />
      </div>
      <div className={styles.root__logotext}>
        <MainTextLogo />
      </div>
    </div>
  );
};

export default HeaderLogo;
