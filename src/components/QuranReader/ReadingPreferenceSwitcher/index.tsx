import { useEffect } from 'react';

import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import LoadingSwitcher from './ReadingPreferenceOption';
import styles from './ReadingPreferenceSwitcher.module.scss';

import Switch, { SwitchSize } from '@/dls/Switch/Switch';
import usePersistPreferenceGroup from '@/hooks/auth/usePersistPreferenceGroup';
import {
  selectReadingPreferences,
  setReadingPreference,
} from '@/redux/slices/QuranReader/readingPreferences';
import { logValueChange } from '@/utils/eventLogger';
import PreferenceGroup from 'types/auth/PreferenceGroup';
import { ReadingPreference } from 'types/QuranReader';

interface Props {
  size?: SwitchSize;
  isIconsOnly?: boolean;
}

const ReadingPreferenceSwitcher: React.FC<Props> = ({ size, isIconsOnly = false }) => {
  const dispatch = useDispatch();
  const readingPreferences = useSelector(selectReadingPreferences);
  const {
    actions: { onSettingsChange },
    isLoading,
  } = usePersistPreferenceGroup();

  // Set default view to Reading
  const defaultReadingPreference = ReadingPreference.Reading;

  useEffect(() => {
    if (readingPreferences.readingPreference !== defaultReadingPreference) {
      dispatch(setReadingPreference(defaultReadingPreference));
      onSettingsChange(
        'readingPreference',
        defaultReadingPreference,
        setReadingPreference(defaultReadingPreference),
        setReadingPreference(defaultReadingPreference),
        PreferenceGroup.READING,
      );
    }
  }, [dispatch, readingPreferences.readingPreference, onSettingsChange, defaultReadingPreference]);

  const onViewSwitched = (view: ReadingPreference) => {
    logValueChange('reading_preference', defaultReadingPreference, view);
    onSettingsChange(
      'readingPreference',
      view,
      setReadingPreference(view),
      setReadingPreference(defaultReadingPreference),
      PreferenceGroup.READING,
    );
  };

  return (
    <div className={classNames(styles.container)}>
      <Switch
        items={[
          {
            name: (
              <LoadingSwitcher
                readingPreference={defaultReadingPreference}
                selectedReadingPreference={ReadingPreference.Reading}
                isLoading={isLoading}
                isIconsOnly={isIconsOnly}
              />
            ),
            value: ReadingPreference.Reading,
          },
        ]}
        selected={defaultReadingPreference}
        onSelect={onViewSwitched}
        size={size}
      />
    </div>
  );
};

export default ReadingPreferenceSwitcher;
