import React from 'react';

import QuranFontSection from './QuranFontSection';
import ResetButton from './ResetButton';
import ThemeSection from './ThemeSection';

const SettingsBody = () => (
  <>
    <ThemeSection />
    <QuranFontSection />

    <ResetButton />
  </>
);

export default SettingsBody;
