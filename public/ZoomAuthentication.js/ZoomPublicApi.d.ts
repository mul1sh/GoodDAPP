import { ZoomSessionResult } from "./ZoomAuthentication";
export declare enum ZoomIDScanRetryMode {
    Front = 0,
    Back = 1,
    FrontAndBack = 2
}
export declare class ZoomIDScanResultCallback {
    succeed: () => void;
    retry: (zoomIDScanRetryMode: ZoomIDScanRetryMode) => void;
    cancel: () => void;
    uploadProgress: (uploadedPercent: number) => void;
}
export declare abstract class ZoomIDScanProcessor {
    abstract processZoomIDScanResultWhileZoomWaits: (zoomIdScanResult: ZoomIDScanResult, zoomIDCheckResultCallback: ZoomIDScanResultCallback) => void;
}
export declare abstract class ZoomFaceMapProcessor {
    abstract processZoomSessionResultWhileZoomWaits: (zoomSessionResult: ZoomSessionResult, zoomFaceMapResultCallback: ZoomFaceMapResultCallback) => void;
}
export declare class ZoomFaceMapResultCallback {
    succeed: () => void;
    retry: () => void;
    cancel: () => void;
    uploadProgress: (uploadedPercent: number) => void;
}
export declare enum ZoomIDScanProcessorStatus {
    Success = 0,
    Unsuccess = 1,
    CancelCalledFromCustomZoomIDScanFaceMapProcessor = 2,
    TimeoutDuringServerProcessing = 3
}
export interface ZoomSessionCompleteFunction {
    (zoomSessionResult?: ZoomSessionResult): void;
}
export interface ZoomIDScanCompleteFunction {
    (zoomIDScanResult?: ZoomIDScanResult): void;
}
export declare enum ZoomSessionType {
    Invalid = 0,
    UnmanagedSession = 1,
    ManagedSessionWithFaceMapProcessor = 2,
    ManagedIDCHeckSessionWithFaceMapProcessor = 3
}
export declare enum ZoomIDType {
    /**
     ID card type
    */
    ZoomIDTypeIDCard = 0,
    /**
     Passport type
    */
    ZoomIDTypePassport = 1,
    /**
     ID type was not selected
    */
    ZoomIDTypeNotSelected = 2
}
export declare enum ZoomIDScanStatus {
    /**
    The ID Scan was successful.
   */
    ZoomIDScanStatusSuccess = 0,
    /**
     The ID Scan was not successful
    */
    ZoomIDScanStatusUnsuccess = 1,
    /**
     User cancelled ID Scan
    */
    ZoomIDScanStatusUserCancelled = 2,
    /**
     Timeout during ID Scan
    */
    ZoomIDScanStatusTimedOut = 3,
    /**
     Context Switch during ID Scan
    */
    ZoomIDScanStatusContextSwitch = 4,
    /**
     Error setting up the ID Scan Camera
    */
    CameraError = 5
}
export declare class IdScanMetrics {
    frontImages: string[];
    backImages: string[];
    idScan: any;
    getIDScanBase64: (callback: (iDScanBase64: string | null) => void) => void;
    constructor();
}
export declare class ZoomIDScanResult {
    status: ZoomIDScanStatus;
    idType: ZoomIDType;
    idScanMetrics: IdScanMetrics;
    sessionId: string | null;
    constructor(idTYpe: ZoomIDType);
}
export declare enum ZoomSessionStatus {
    /**
     * The ZoOm Session was performed successfully and a FaceMap was generated.  Pass the FaceMap to ZoOm Server for further processing.
     */
    SessionCompletedSuccessfully = 0,
    /**
     * The ZoOm Session was cancelled because not all guidance images were configured.
     */
    MissingGuidanceImages = 1,
    /**
     * The ZoOm Session was cancelled because your App is not in production and requires a network connection.
     */
    NonProductionModeNetworkRequired = 2,
    /**
     * The ZoOm Session was cancelled because the user was unable to complete a ZoOm Session in the default allotted time or the timeout set by the developer.
     */
    Timeout = 3,
    /**
     * The ZoOm Session was cancelled due to the app being terminated, put to sleep, an OS notification, or the app was placed in the background.
     */
    ContextSwitch = 4,
    /**
     * The ZoOm Session was cancelled because the user was unable to place their face in the UnZoOmed, far away oval in the default allotted time or the timeout set by the developer.
     */
    TooMuchTimeToDetectFirstFace = 5,
    /**
     * The ZoOm Session was cancelled because the user was unable to place their face in the ZoOmed, close oval in the default allotted time or the timeout set by the developer.
     */
    TooMuchTimeToDetectFirstFaceInPhaseTwo = 6,
    /**
     * The developer programmatically called the ZoOm Session cancel API.
     */
    ProgrammaticallyCancelled = 7,
    /**
     * The ZoOm Session was cancelled due to a device orientation change during the ZoOm Session.
     */
    OrientationChangeDuringSession = 8,
    /**
     * The ZoOm Session was cancelled because device is in landscape mode.
     * The user experience of devices in these orientations is poor and thus portrait is required.
     */
    LandscapeModeNotAllowed = 9,
    /**
     * The user pressed the cancel button and did not complete the ZoOm Session.
     */
    UserCancelled = 10,
    /**
     * The user pressed the cancel button during New User Guidance.
     */
    UserCancelledFromNewUserGuidance = 11,
    /**
     * The user pressed the cancel button during Retry Guidance.
     */
    UserCancelledFromRetryGuidance = 12,
    /**
     * The user cancelled out of the ZoOm experience while attempting to get camera permissions.
     */
    UserCancelledWhenAttemptingToGetCameraPermissions = 13,
    /**
     * The ZoOm Session was cancelled because the user was in a locked out state.
     */
    LockedOut = 14,
    /**
     * The ZoOm Session was cancelled because there was no camera available.
     */
    CameraDoesNotExist = 15,
    /**
     * This status will never be returned in a properly configured or production app.
     * This status is returned if your license is invalid or network connectivity issues occur during a session when the application is not in production.
     */
    NonProductionModeLicenseInvalid = 16,
    /**
     * The ZoOm Session was cancelled because preload was not completed or an issue was encountered preloading ZoOm.
     */
    PreloadNotCompleted = 17,
    /**
     * The ZoOm Session was cancelled because video initialization encountered an issue.
     * This status is only returned for Unmanaged Sessions.
     */
    UnmanagedSessionVideoInitializationNotCompleted = 18,
    /**
     * The ZoOm Session was cancelled because one of the elements passed to ZoOm does not exist on the DOM.
     * This status is only returned for Unmanaged Sessions.
     */
    ZoomVideoOrInterfaceDOMElementDoesNotExist = 19,
    /**
     * The ZoOm Session was cancelled because ZoOm cannot be rendered when the document is not ready.
     */
    DocumentNotReady = 20,
    /**
     * The ZoOm Session was cancelled because the video height/width was 0. The camera or video may not be initialized.
     * This status is only returned for Unmanaged Sessions.
     */
    VideoHeightOrWidthZeroOrUninitialized = 21,
    /**
     * The ZoOm Session was cancelled because there was another ZoOm Session in progress.
     */
    ZoomSessionInProgress = 22,
    /**
     * The ZoOm Session was cancelled because the video element is not active.
     * This status is only returned for Unmanaged Sessions.
     */
    VideoCaptureStreamNotActive = 23,
    /**
     * The ZoOm Session was cancelled because the selected camera is not active.
     * This status is only returned for Unmanaged Sessions.
     */
    CameraNotRunning = 24,
    /**
     * The ZoOm Session was cancelled because ZoOm initialization has not been completed yet.
     */
    InitializationNotCompleted = 25,
    /**
     * The ZoOm Session was cancelled because of an unknown and unexpected error.  ZoOm leverages a variety of platform APIs including camera, storage, security, networking, and more.
     * This return value is a catch-all for errors experienced during normal usage of these APIs.
     */
    UnknownInternalError = 26
}
export declare function descriptionForSessionStatus(enumValue: ZoomSessionStatus): string;
/** Represents the status of the SDK */
export declare enum ZoomSDKStatus {
    /**
     * Initialize was never attempted.
     */
    NeverInitialized = 0,
    /**
     * The License provided was verified.
     */
    Initialized = 1,
    /**
     * The Device License Key Identifier could not be verified due to connectivity issues on the user's device.
     */
    NetworkIssues = 2,
    /**
     * The Device License Key Identifier provided was invalid.
     */
    InvalidDeviceLicenseKeyIdentifier = 3,
    /**
     * This version of ZoOm SDK is deprecated.
     */
    VersionDeprecated = 4,
    /**
     *  The system is incompatible with the ZoOm SDK.
     */
    DeviceNotSupported = 5,
    /**
     *  Device is in landscape display orientation. ZoOm can only be used in portrait display orientation.
     */
    DeviceInLandscapeMode = 6,
    /**
     *  Device is in reverse portrait mode. ZoOm can only be used in portrait display orientation.
     */
    DeviceLockedOut = 7,
    /**
      * License was expired, contained invalid text, or you are attempting to initialize on a domain that is not specified in your license.
      */
    LicenseExpiredOrInvalid = 8
}
/** Gets a friendly string for representing the status of the SDK */
export declare function descriptionForZoomSDKStatus(enumValue: ZoomSDKStatus): string;
/**
 * Represents the results of preloading ZoOm resources.
 */
export declare enum ZoomPreloadResult {
    /**
     * ZoOm preloaded successfully.
     */
    Success = 0,
    /**
     * ZoOm encountered an error preloading resources.
     */
    Error = 1
}
/**
 * Gets a friendly string to describe the result of preloading ZoOm resources.
 */
export declare function descriptionFoPreloadResult(enumValue: ZoomPreloadResult): string;
