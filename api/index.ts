import * as cordovaPrinterApi from '../www/printer';

export type PaperLabel = 'W17H54'|'W17H87'|'W23H23'|'W29H42'|'W29H90'|'W38H90'|'W39H48'|'W52H29'|'W62H29'|'W62H100'|'W12'|'W29'|'W38'|'W50'|'W54'|'W62'|'W60H86'|'W54H29'|'W62RB'

export interface Printer {
  model: string // Usually of the form 'QL_720NW' on Android
  port: 'NET' | 'BLUETOOTH'
  modelName: string // Usually of the form 'Brother QL-720NW'
  ipAddress?: string
  macAddress?: string
  serialNumber?: string
  nodeName?: string
  location?: string
  paperLabelName?: PaperLabel
}

export function findNetworkPrinters(): Promise<Printer[]> {
  return new Promise((resolve, reject) => {
    cordovaPrinterApi.findNetworkPrinters(resolve, reject);
  });
}

export function setPrinter(printer: Printer, paperLabel: PaperLabel): Promise<void> {
  return new Promise((resolve, reject) => {
    cordovaPrinterApi.setPrinter({...printer, paperLabelName: paperLabel}, resolve, reject);
  });
}

export function printBitmap(base64Image: string): Promise<void> {
  return new Promise((resolve, reject) => {
    cordovaPrinterApi.printViaSDK(base64Image, resolve, reject);
  });
}
