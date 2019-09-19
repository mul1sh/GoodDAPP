import { ZoomSessionStatus } from "../ZoomPublicApi";
export declare type TimeBasedSessionImages = string | null;
export interface ZoomSessionResult {
    faceMetrics: ZoomFaceBiometrics;
    sessionId: string | null;
    status: ZoomSessionStatus;
    countOfZoomSessionsPerformed: number;
    [key: string]: string | ZoomSessionStatus | ZoomFaceBiometrics | null | {};
}
export declare class ZoomFaceBiometrics {
    auditTrail: string[];
    timeBasedSessionImages: TimeBasedSessionImages[];
    faceMap: Blob | null;
    getFaceMapBase64: (callback: (faceMapBase64: string | null) => void) => void;
    constructor();
}
