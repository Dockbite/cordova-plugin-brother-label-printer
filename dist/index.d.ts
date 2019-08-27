export declare enum PaperLabel {
    W17H54 = "W17H54",
    W17H87 = "W17H87",
    W23H23 = "W23H23",
    W29H42 = "W29H42",
    W29H90 = "W29H90",
    W38H90 = "W38H90",
    W39H48 = "W39H48",
    W52H29 = "W52H29",
    W62H29 = "W62H29",
    W62H100 = "W62H100",
    W12 = "W12",
    W29 = "W29",
    W38 = "W38",
    W50 = "W50",
    W54 = "W54",
    W62 = "W62",
    W60H86 = "W60H86",
    W54H29 = "W54H29",
    W62RB = "W62RB"
}
export interface Printer {
    model: string;
    port: 'NET' | 'BLUETOOTH';
    modelName: string;
    ipAddress?: string;
    macAddress?: string;
    serialNumber?: string;
    nodeName?: string;
    location?: string;
    paperLabelName?: PaperLabel;
}
export declare function findNetworkPrinters(): Promise<Printer[]>;
export declare function setPrinter(printer: Printer, paperLabel: PaperLabel): Promise<void>;
export declare function printLabel(base64Image: string): Promise<void>;
