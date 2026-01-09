// PDF.js type definitions
declare global {
  interface Window {
    pdfjsLib?: {
      getDocument: (data: ArrayBuffer) => {
        promise: Promise<PDFDocument>;
      };
      GlobalWorkerOptions: {
        workerSrc: string;
      };
    };
  }
}

interface PDFDocument {
  numPages: number;
  getPage: (pageNumber: number) => Promise<PDFPage>;
}

interface PDFPage {
  getTextContent: () => Promise<TextContent>;
}

interface TextContent {
  items: TextItem[];
}

interface TextItem {
  str: string;
  transform: number[];
  width: number;
  height: number;
}

export {};