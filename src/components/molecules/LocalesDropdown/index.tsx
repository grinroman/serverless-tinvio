import React, { useState } from 'react';

import clsx from 'clsx';

import { Typography } from 'src/components/atoms/Typography';

import locales from 'src/mocks/locales.json';

import ArrowDown from 'public/images/svgs/arrow-down.svg';

import styles from './localesdropdown.module.scss';

type LocalesDropdownProps = {};

export const LocalesDropdown: React.FC<LocalesDropdownProps> = ({}) => {
  const [currentLocale, setCurrentLocale] = useState('en');

  const changeLocaleHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    newLocale: string
  ) => {
    e.preventDefault();
  };

  return (
    <button className={styles.root}>
      <div className={clsx(styles.root__propagination)} />
      <Typography preset="locales" component="div">
        {currentLocale}
      </Typography>
      <ArrowDown />
      <div className={styles.root__locallist}>
        {locales.map((el: string) => (
          <div className={styles.root__locallistItem}>{el}</div>
        ))}
      </div>
    </button>
  );
};
