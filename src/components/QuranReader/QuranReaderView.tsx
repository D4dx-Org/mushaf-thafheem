import React from "react";
import dynamic from "next/dynamic";
import { VersesResponse } from "types/ApiResponses";
import { QuranReaderDataType } from "types/QuranReader";
import QuranReaderStyles from "@/redux/types/QuranReaderStyles";

// Dynamically import ReadingView component
const ReadingView = dynamic(() => import("./ReadingView"));

interface Props {
  quranReaderStyles: QuranReaderStyles;
  quranReaderDataType: QuranReaderDataType;
  initialData: VersesResponse;
  resourceId: number | string;
}

const SimpleQuranReader: React.FC<Props> = ({
  quranReaderStyles,
  quranReaderDataType,
  initialData,
  resourceId,
}) => {
  return (
    <ReadingView
      quranReaderStyles={quranReaderStyles}
      quranReaderDataType={quranReaderDataType}
      initialData={initialData}
      resourceId={resourceId}
    />
  );
};

export default SimpleQuranReader;
