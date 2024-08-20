import { getDocument, GlobalWorkerOptions } from 'pdfjsLib';

// Configure workerSrc for PDF.js
GlobalWorkerOptions.workerSrc = 'path/to/pdf.worker.js';

export const loadPdf = async (url: string) => {
  const loadingTask = getDocument(url);
  const pdf = await loadingTask.promise;
  return pdf;
};

// Example function to get the number of pages
export const getNumberOfPages = async (url: string) => {
  const pdf = await loadPdf(url);
  return pdf.numPages;
};
