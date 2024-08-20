import { GlobalWorkerOptions, getDocument } from 'pdfjsLib';

// Configure workerSrc for PDF.js
GlobalWorkerOptions.workerSrc = 'path/to/pdf.worker.js';
const loadPdf = async (url) => {
    const loadingTask = getDocument(url);
    const pdf = await loadingTask.promise;
    return pdf;
};
// Example function to get the number of pages
const getNumberOfPages = async (url) => {
    const pdf = await loadPdf(url);
    return pdf.numPages;
};

export { getNumberOfPages, loadPdf };
//# sourceMappingURL=bundle.esm.js.map
