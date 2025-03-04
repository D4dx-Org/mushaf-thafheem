/* eslint-disable react/no-multi-comp */
import React from 'react';

import dynamic from 'next/dynamic';

import useSyncReadingProgress from './hooks/useSyncReadingProgress';

import QuranReaderStyles from '@/redux/types/QuranReaderStyles';
import { VersesResponse } from 'types/ApiResponses';
import { QuranReaderDataType } from 'types/QuranReader';

const ReadingView = dynamic(() => import('./ReadingView'));

interface Props {
  quranReaderStyles: QuranReaderStyles;
  quranReaderDataType: QuranReaderDataType;
  initialData: VersesResponse;
  resourceId: number | string;
}

const QuranReaderView: React.FC<Props> = ({
  quranReaderStyles,
  quranReaderDataType,
  initialData,
  resourceId,
}) => {
  // We'll always use reading mode
  const isReadingPreference = true;

  useSyncReadingProgress({
    isReadingPreference,
  });

  return (
    <ReadingView
      quranReaderStyles={quranReaderStyles}
      quranReaderDataType={quranReaderDataType}
      initialData={initialData}
      resourceId={resourceId}
    />
  );
};

export default QuranReaderView;
