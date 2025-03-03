/* eslint-disable i18next/no-literal-string */
import { PopoverMenuExpandDirection } from '../PopoverMenu/PopoverMenu';

import styles from './Footer.module.scss';

import LanguageSelector from '@/components/Navbar/LanguageSelector';

const BottomSection = () => {
  return (
    <div className={styles.bottomSectionContainer}>
      <div className={styles.actionsSections}>
        <div className={styles.actionContainer}>
          <LanguageSelector
            shouldShowSelectedLang
            expandDirection={PopoverMenuExpandDirection.TOP}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
