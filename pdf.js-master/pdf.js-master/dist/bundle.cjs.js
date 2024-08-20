'use strict';

var pdfjsLib = require('pdfjsLib');

// Configure workerSrc for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'path/to/pdf.worker.js';
const loadPdf = async (url) => {
    const loadingTask = pdfjsLib.getDocument(url);
    const pdf = await loadingTask.promise;
    return pdf;
};
// Example function to get the number of pages
const getNumberOfPages = async (url) => {
    const pdf = await loadPdf(url);
    return pdf.numPages;
};

exports.getNumberOfPages = getNumberOfPages;
exports.loadPdf = loadPdf;
//# sourceMappingURL=bundle.cjs.js.map
