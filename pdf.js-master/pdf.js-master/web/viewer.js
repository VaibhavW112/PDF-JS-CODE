/* Copyright 2016 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { RenderingStates, ScrollMode, SpreadMode } from "./ui_utils.js";
import { AppOptions } from "./app_options.js";
import { LinkTarget } from "./pdf_link_service.js";
import { PDFViewerApplication } from "./app.js";

/* eslint-disable-next-line no-unused-vars */
const pdfjsVersion =
  typeof PDFJSDev !== "undefined" ? PDFJSDev.eval("BUNDLE_VERSION") : void 0;
/* eslint-disable-next-line no-unused-vars */
const pdfjsBuild =
  typeof PDFJSDev !== "undefined" ? PDFJSDev.eval("BUNDLE_BUILD") : void 0;

const AppConstants =
  typeof PDFJSDev === "undefined" || PDFJSDev.test("GENERIC")
    ? { LinkTarget, RenderingStates, ScrollMode, SpreadMode }
    : null;

window.PDFViewerApplication = PDFViewerApplication;
window.PDFViewerApplicationConstants = AppConstants;
window.PDFViewerApplicationOptions = AppOptions;

function getViewerConfiguration() {
  return {
    appContainer: document.body,
    mainContainer: document.getElementById("viewerContainer"),
    viewerContainer: document.getElementById("viewer"),
    toolbar: {
      container: document.getElementById("toolbarViewer"),
      numPages: document.getElementById("numPages"),
      pageNumber: document.getElementById("pageNumber"),
      scaleSelect: document.getElementById("scaleSelect"),
      customScaleOption: document.getElementById("customScaleOption"),
      previous: document.getElementById("previous"),
      next: document.getElementById("next"),
      zoomIn: document.getElementById("zoomIn"),
      zoomOut: document.getElementById("zoomOut"),
      viewFind: document.getElementById("viewFind"),
      print: document.getElementById("print"),
      editorFreeTextButton: document.getElementById("editorFreeText"),
      editorFreeTextParamsToolbar: document.getElementById(
        "editorFreeTextParamsToolbar"
      ),
      editorHighlightButton: document.getElementById("editorHighlight"),
      editorHighlightParamsToolbar: document.getElementById(
        "editorHighlightParamsToolbar"
      ),
      editorHighlightColorPicker: document.getElementById(
        "editorHighlightColorPicker"
      ),
      editorInkButton: document.getElementById("editorInk"),
      editorArrowButton: document.getElementById("editorArrow"),
      editorInkParamsToolbar: document.getElementById("editorInkParamsToolbar"),
      editorStampButton: document.getElementById("editorStamp"),
      editorStampParamsToolbar: document.getElementById(
        "editorStampParamsToolbar"
      ),
      download: document.getElementById("download"),
    },
    secondaryToolbar: {
      toolbar: document.getElementById("secondaryToolbar"),
      toggleButton: document.getElementById("secondaryToolbarToggle"),
      presentationModeButton: document.getElementById("presentationMode"),
      openFileButton:
        typeof PDFJSDev === "undefined" || PDFJSDev.test("GENERIC")
          ? document.getElementById("secondaryOpenFile")
          : null,
      printButton: document.getElementById("secondaryPrint"),
      downloadButton: document.getElementById("secondaryDownload"),
      viewBookmarkButton: document.getElementById("viewBookmark"),
      firstPageButton: document.getElementById("firstPage"),
      lastPageButton: document.getElementById("lastPage"),
      pageRotateCwButton: document.getElementById("pageRotateCw"),
      pageRotateCcwButton: document.getElementById("pageRotateCcw"),
      cursorSelectToolButton: document.getElementById("cursorSelectTool"),
      cursorHandToolButton: document.getElementById("cursorHandTool"),
      scrollPageButton: document.getElementById("scrollPage"),
      scrollVerticalButton: document.getElementById("scrollVertical"),
      scrollHorizontalButton: document.getElementById("scrollHorizontal"),
      scrollWrappedButton: document.getElementById("scrollWrapped"),
      spreadNoneButton: document.getElementById("spreadNone"),
      spreadOddButton: document.getElementById("spreadOdd"),
      spreadEvenButton: document.getElementById("spreadEven"),
      documentPropertiesButton: document.getElementById("documentProperties"),
    },
    sidebar: {
      // Divs (and sidebar button)
      outerContainer: document.getElementById("outerContainer"),
      sidebarContainer: document.getElementById("sidebarContainer"),
      toggleButton: document.getElementById("sidebarToggle"),
      resizer: document.getElementById("sidebarResizer"),
      // Buttons
      thumbnailButton: document.getElementById("viewThumbnail"),
      outlineButton: document.getElementById("viewOutline"),
      attachmentsButton: document.getElementById("viewAttachments"),
      layersButton: document.getElementById("viewLayers"),
      // Views
      thumbnailView: document.getElementById("thumbnailView"),
      outlineView: document.getElementById("outlineView"),
      attachmentsView: document.getElementById("attachmentsView"),
      layersView: document.getElementById("layersView"),
      // View-specific options
      currentOutlineItemButton: document.getElementById("currentOutlineItem"),
    },
    findBar: {
      bar: document.getElementById("findbar"),
      toggleButton: document.getElementById("viewFind"),
      findField: document.getElementById("findInput"),
      highlightAllCheckbox: document.getElementById("findHighlightAll"),
      caseSensitiveCheckbox: document.getElementById("findMatchCase"),
      matchDiacriticsCheckbox: document.getElementById("findMatchDiacritics"),
      entireWordCheckbox: document.getElementById("findEntireWord"),
      findMsg: document.getElementById("findMsg"),
      findResultsCount: document.getElementById("findResultsCount"),
      findPreviousButton: document.getElementById("findPrevious"),
      findNextButton: document.getElementById("findNext"),
    },
    passwordOverlay: {
      dialog: document.getElementById("passwordDialog"),
      label: document.getElementById("passwordText"),
      input: document.getElementById("password"),
      submitButton: document.getElementById("passwordSubmit"),
      cancelButton: document.getElementById("passwordCancel"),
    },
    documentProperties: {
      dialog: document.getElementById("documentPropertiesDialog"),
      closeButton: document.getElementById("documentPropertiesClose"),
      fields: {
        fileName: document.getElementById("fileNameField"),
        fileSize: document.getElementById("fileSizeField"),
        title: document.getElementById("titleField"),
        author: document.getElementById("authorField"),
        subject: document.getElementById("subjectField"),
        keywords: document.getElementById("keywordsField"),
        creationDate: document.getElementById("creationDateField"),
        modificationDate: document.getElementById("modificationDateField"),
        creator: document.getElementById("creatorField"),
        producer: document.getElementById("producerField"),
        version: document.getElementById("versionField"),
        pageCount: document.getElementById("pageCountField"),
        pageSize: document.getElementById("pageSizeField"),
        linearized: document.getElementById("linearizedField"),
      },
    },
    altTextDialog: {
      dialog: document.getElementById("altTextDialog"),
      optionDescription: document.getElementById("descriptionButton"),
      optionDecorative: document.getElementById("decorativeButton"),
      textarea: document.getElementById("descriptionTextarea"),
      cancelButton: document.getElementById("altTextCancel"),
      saveButton: document.getElementById("altTextSave"),
    },
    annotationEditorParams: {
      editorFreeTextFontSize: document.getElementById("editorFreeTextFontSize"),
      editorFreeTextColor: document.getElementById("editorFreeTextColor"),
      editorInkColor: document.getElementById("editorInkColor"),
      editorInkThickness: document.getElementById("editorInkThickness"),
      editorInkOpacity: document.getElementById("editorInkOpacity"),
      editorStampAddImage: document.getElementById("editorStampAddImage"),
      editorFreeHighlightThickness: document.getElementById(
        "editorFreeHighlightThickness"
      ),
      editorHighlightShowAll: document.getElementById("editorHighlightShowAll"),
    },
    printContainer: document.getElementById("printContainer"),
  };
}

const applyArrowChanges = () => {
  const storedPoints = JSON.parse(localStorage.getItem("arrowDelta"));
  const resizedDimensions = JSON.parse(
    localStorage.getItem("resizedArrowDelta")
  );
  const isResized = JSON.parse(localStorage.getItem("isResized"));

  if (isResized && resizedDimensions) {
    // const pageNumber = Number(
    //   getViewerConfiguration().toolbar.pageNumber.value
    // );
    const pageNumber = Number(resizedDimensions.pageIndex) + 1;
    drawArrowOnPage(pageNumber, storedPoints, isResized, resizedDimensions);
  } else if (!isResized && storedPoints) {
    const pageNumber = Number(storedPoints[0].pageIndex) + 1;
    drawArrowOnPage(pageNumber, storedPoints, isResized);
  }
};

const applyLineChanges = () => {
  const bezierPoints = localStorage.getItem("linePoints");
  const storedPoints = JSON.parse(bezierPoints);
  if (bezierPoints) {
    const pageNumber = Number(
      getViewerConfiguration().toolbar.pageNumber.value
    );
    drawLineOnPage(pageNumber, storedPoints);
  }
};

const highlightText = () => {
  const bezierPoints = localStorage.getItem("highlightedPoints");
  const highlightedPoints = JSON.parse(bezierPoints);
  const pageNumber = Number(getViewerConfiguration().toolbar.pageNumber.value);
  highlightSelectedArea(pageNumber, highlightedPoints);
};

const highlightSelectedArea = (pageNumber, coordinates) => {
  const currentPage = PDFViewerApplication.pdfViewer.getPageView(
    /* index = */ pageNumber - 1
  );

  PDFViewerApplication.pdfDocument
    .getPage(pageNumber)
    .then(page => {
      const viewport = page.getViewport({ scale: currentPage.viewport.scale });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.pointerEvents = "none";

      // Draw the line
      // context.fillStyle = "rgba(255, 255, 0, 0.3)"; // Yellow with 30% opacity
      // context.beginPath();
      // context.moveTo(
      //   coordinates[0][0] * viewport.viewBox,
      //   coordinates[0][1] * viewport.height
      // );
      // coordinates.slice(1).forEach(point => {
      //   console.log("Width ==> " + point[0] * viewport.width);
      //   console.log("Height ==> " + point[1] * viewport.height);

      //   context.lineTo(point[0] * viewport.width, point[1] * viewport.height);
      // });
      // context.closePath();
      // context.fill();

      // context.strokeStyle = "#000000"; // Default black border color
      // context.lineWidth = 2; // Default border width
      // context.stroke();
      context.globalAlpha = 0.5;
      context.fillStyle = "rgba(255, 0, 0, 0.3)"; // Default red color with 30% opacity
      coordinates.forEach(coord => {
        const actualX = coord.x * viewport.width;
        const actualY = coord.y * viewport.height;
        const actualWidth = coord.width * viewport.width;
        const actualHeight = coord.height * viewport.height;
        context.fillRect(actualX, actualY, actualWidth, actualHeight);
      });
      const viewerElement = document.getElementsByClassName("page");
      viewerElement[pageNumber - 1].prepend(canvas);
      console.log("Line drawn successfully.");
    })
    .catch(error => {
      console.error("Error drawing line:", error);
    });
};

function drawLineOnPage(pageNumber, coordinates) {
  const currentPage = PDFViewerApplication.pdfViewer.getPageView(
    /* index = */ pageNumber - 1
  );

  PDFViewerApplication.pdfDocument
    .getPage(pageNumber)
    .then(page => {
      const viewport = page.getViewport({ scale: currentPage.viewport.scale });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.pointerEvents = "none";

      // Draw the line
      context.beginPath();
      coordinates.forEach((point, index) => {
        const [x, y] = point;
        const actualX = x; // (x * viewport.width) / 1000;
        const actualY = y; // (y * viewport.height) / 1000;

        if (index === 0) {
          context.moveTo(actualX, actualY);
        } else {
          context.lineTo(actualX, actualY);
        }
      });
      context.strokeStyle = "black"; // Red color
      context.lineWidth = 2; // Set line width
      context.stroke();

      const viewerElement = document.getElementsByClassName("page");
      viewerElement[pageNumber - 1].prepend(canvas);
      console.log("Line drawn successfully.");
    })
    .catch(error => {
      console.error("Error drawing line:", error);
    });
}

function drawArrowOnPage(
  pageNumber,
  coordinates,
  isResized,
  resizedCoordinates = null
) {
  const currentPage = PDFViewerApplication.pdfViewer.getPageView(
    pageNumber - 1
  );

  PDFViewerApplication.pdfDocument
    .getPage(pageNumber)
    .then(page => {
      const viewport = page.getViewport({ scale: currentPage.viewport.scale });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.pointerEvents = "none";

      // const storedDimensions = JSON.parse(
      //   localStorage.getItem("newDimensions")
      // );
      // const isResized = JSON.parse(localStorage.getItem("isResized"));

      let minX = Infinity,
        minY = Infinity,
        maxX = -Infinity,
        maxY = -Infinity;

      // Calculate the bounding box of the arrow
      coordinates.forEach(point => {
        const { moveToX, moveToY, x, y } = point;
        minX = Math.min(minX, moveToX, x);
        minY = Math.min(minY, moveToY, y);
        maxX = Math.max(maxX, moveToX, x);
        maxY = Math.max(maxY, moveToY, y);
      });

      const originalWidth = maxX - minX;
      const originalHeight = maxY - minY;

      coordinates.forEach(point => {
        const { moveToX, moveToY, x, y, color, thickness } = point;

        context.lineWidth = thickness;
        context.strokeStyle = color;
        context.lineCap = "round";

        if (isResized && resizedCoordinates) {
          let {
            width: newWidth,
            height: newHeight,
            x: newX,
            y: newY,
          } = resizedCoordinates;

          const widthScale = (newWidth * viewport.width) / originalWidth;
          const heightScale = (newHeight * viewport.height) / originalHeight;

          const adjustedMoveToX =
            (moveToX - minX) * widthScale + newX * viewport.width;
          const adjustedMoveToY =
            (moveToY - minY) * heightScale + newY * viewport.height;
          const adjustedX = (x - minX) * widthScale + newX * viewport.width;
          const adjustedY = (y - minY) * heightScale + newY * viewport.height;

          context.moveTo(adjustedMoveToX, adjustedMoveToY);
          context.lineTo(adjustedX, adjustedY);
        } else {
          context.moveTo(moveToX, moveToY);
          context.lineTo(x, y);
        }
      });
      context.stroke();
      // context.beginPath();
      // context.lineWidth = 1; // Adjust this value as needed
      // context.strokeStyle = "red"; // Change the color as needed
      // context.rect(
      //   newX * viewport.width,
      //   newY * viewport.height,
      //   newWidth * viewport.width,
      //   newHeight * viewport.height
      // );
      // context.stroke(); // Stroke the path to render the rectangle

      const viewerElement = document.getElementsByClassName("page");
      viewerElement[pageNumber - 1].prepend(canvas);
      console.log("All arrows with adjusted rectangle drawn successfully.");
    })
    .catch(error => {
      console.error("Error drawing arrows:", error);
    });
}

// const addNotesButton = () => {
//   //alert("Button clicked");
//   const pageNumber = Number(getViewerConfiguration().toolbar.pageNumber.value);
//   const currentPage = PDFViewerApplication.pdfViewer.getPageView(
//     /* index = */ pageNumber - 1
//   );
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");
//   PDFViewerApplication.pdfDocument.getPage(2).then(page => {
//     const viewport = page.getViewport({ scale: currentPage.viewport.scale });
//     canvas.height = viewport.height;
//     canvas.width = viewport.width;
//     canvas.style.position = "absolute";
//     canvas.style.top = "0";
//     canvas.style.left = "0";
//     // canvas.style.pointerEvents = "none";

//     const viewerElement = document.getElementsByClassName("page");
//     viewerElement[0].prepend(canvas);
//     const button = document.createElement("button");
//     button.textContent = "Click me";
//     button.style.position = "absolute";
//     button.style.top = "50%"; // Adjust top position as needed
//     button.style.left = "50%"; // Adjust left position as needed
//     document.body.prepend(button);

//     // Function to handle button click
//     function handleClick() {
//       alert("Button clicked!");
//     }

//     // Add click event listener to the button
//     button.addEventListener("click", handleClick);
//     // buttonElement.addEventListener("click", () => alert("Button clicked"));
//     console.log("Button created successfully");
//   });
// };

function webViewerLoad() {
  const config = getViewerConfiguration();

  if (typeof PDFJSDev !== "undefined" && PDFJSDev.test("GENERIC")) {
    // Give custom implementations of the default viewer a simpler way to
    // set various `AppOptions`, by dispatching an event once all viewer
    // files are loaded but *before* the viewer initialization has run.
    const event = new CustomEvent("webviewerloaded", {
      bubbles: true,
      cancelable: true,
      detail: {
        source: window,
      },
    });
    try {
      // Attempt to dispatch the event at the embedding `document`,
      // in order to support cases where the viewer is embedded in
      // a *dynamically* created <iframe> element.
      parent.document.dispatchEvent(event);
    } catch (ex) {
      // The viewer could be in e.g. a cross-origin <iframe> element,
      // fallback to dispatching the event at the current `document`.
      console.error(`webviewerloaded: ${ex}`);
      document.dispatchEvent(event);
    }
  }
  PDFViewerApplication.run(config);
  document
    .getElementById("editorArrow")
    .addEventListener("click", applyArrowChanges);
  // document
  //   .getElementById("highlightbutton")
  //   .addEventListener("click", highlightText);
  // getViewerConfiguration().toolbar.editorFreeTextButton.addEventListener(
  //   "click",
  //   addNotesButton
  // );

  PDFViewerApplication.run(config);
}

// Block the "load" event until all pages are loaded, to ensure that printing
// works in Firefox; see https://bugzilla.mozilla.org/show_bug.cgi?id=1618553
document.blockUnblockOnload?.(true);

if (
  document.readyState === "interactive" ||
  document.readyState === "complete"
) {
  webViewerLoad();
} else {
  document.addEventListener("DOMContentLoaded", webViewerLoad, true);
}

export {
  PDFViewerApplication,
  AppConstants as PDFViewerApplicationConstants,
  AppOptions as PDFViewerApplicationOptions,
};
