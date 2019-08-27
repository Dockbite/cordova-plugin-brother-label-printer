"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cordovaPrinterApi = require("../www/printer");
var PaperLabel;
(function (PaperLabel) {
    PaperLabel["W17H54"] = "W17H54";
    PaperLabel["W17H87"] = "W17H87";
    PaperLabel["W23H23"] = "W23H23";
    PaperLabel["W29H42"] = "W29H42";
    PaperLabel["W29H90"] = "W29H90";
    PaperLabel["W38H90"] = "W38H90";
    PaperLabel["W39H48"] = "W39H48";
    PaperLabel["W52H29"] = "W52H29";
    PaperLabel["W62H29"] = "W62H29";
    PaperLabel["W62H100"] = "W62H100";
    PaperLabel["W12"] = "W12";
    PaperLabel["W29"] = "W29";
    PaperLabel["W38"] = "W38";
    PaperLabel["W50"] = "W50";
    PaperLabel["W54"] = "W54";
    PaperLabel["W62"] = "W62";
    PaperLabel["W60H86"] = "W60H86";
    PaperLabel["W54H29"] = "W54H29";
    PaperLabel["W62RB"] = "W62RB";
})(PaperLabel = exports.PaperLabel || (exports.PaperLabel = {}));
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