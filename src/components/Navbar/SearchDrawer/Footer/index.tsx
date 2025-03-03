import React from 'react';

import styles from './Footer.module.scss';

import Separator from '@/dls/Separator/Separator';

const FOOTER_TEXT = 'Mykitab';

const Footer: React.FC = () => {
  return (
    <div>
      <Separator />
      <div className={styles.container}>{FOOTER_TEXT}</div>
    </div>
  );
};

export default Footer;
