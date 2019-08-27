"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cordovaPrinterApi = require("../www/printer");
function findNetworkPrinters() {
    return new Promise((resolve, reject) => {
        cordovaPrinterApi.findNetworkPrinters(resolve, reject);
    });
}
exports.findNetworkPrinters = findNetworkPrinters;
function setPrinter(printer, paperLabel) {
    return new Promise((resolve, reject) => {
        cordovaPrinterApi.setPrinter(Object.assign({}, printer, { paperLabelName: paperLabel }), resolve, reject);
    });
}
exports.setPrinter = setPrinter;
function printLabel(base64Image) {
    return new Promise((resolve, reject) => {
        cordovaPrinterApi.printViaSDK(base64Image, resolve, reject);
    });
}
exports.printLabel = printLabel;
//# sourceMappingURL=index.js.map