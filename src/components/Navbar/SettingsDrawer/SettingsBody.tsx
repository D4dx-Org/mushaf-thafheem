import React from 'react';

import QuranFontSection from './QuranFontSection';
import ResetButton from './ResetButton';
import ThemeSection from './ThemeSection';
import WordByWordSection from './WordByWordSection';

const SettingsBody = () => (
  <>
    <ThemeSection />
    <QuranFontSection />
    <WordByWordSection />

    <ResetButton />
  </>
);

export default SettingsBody;
