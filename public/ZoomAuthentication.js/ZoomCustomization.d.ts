import { ZoomGuardrailCustomizationType } from "./ZoomGuardRails";
export declare enum ZoomExitAnimationStyle {
    None = 0,
    RippleOut = 1,
    FadeOutMin = 2
}
export declare enum ZoomCancelButtonLocation {
    Disabled = 0,
    TopLeft = 1,
    TopRight = 2
}
export interface OvalCustomization {
    strokeColor: string;
    progressColor1: string;
    progressColor2: string;
    progressStrokeWidth: number;
    strokeWidth: number;
}
export interface FeedbackCustomization {
    backgroundColor: string;
    textFont: string;
    textColor: string;
}
export interface InitialLoadingAnimationCustomization {
    element: HTMLElement;
}
export interface FrameCustomization {
    backgroundColor: string;
}
export interface CancelButtonCustomization {
    location: number;
    customImage: string;
}
export interface ExitAnimationCustomization {
    exitAnimationSuccess: number;
    exitAnimationUnsuccess: number;
}
export interface SessionTimerCustomization {
    maxTimeOverall: number;
    maxTimeToDetectFirstFace: number;
    maxTimeToDetectFirstFaceInPhaseTwo: number;
}
export interface GuidanceImageCustomization {
    idealZoomImage: string;
    badLightingImage: string;
    goodLightingImage: string;
    badAnglePhoneImage: string;
    goodAnglePhoneImage: string;
    badAngleWebcamImage: string;
    goodAngleWebcamImage: string;
    introScreenBrandingImage: string;
    cameraPermissionsScreenImage: string;
    lockoutScreenLockedImage: string;
    lockoutScreenUnlockedImage: string;
}
export interface GuidanceCustomization {
    buttonFont: string;
    buttonBorderWidth: string;
    buttonBorderColor: string;
    buttonCornerRadius: string;
    buttonTextNormalColor: string;
    buttonTextHighlightColor: string;
    buttonBackgroundNormalColor: string;
    buttonBackgroundHighlightColor: string;
    imageCustomization: ZoomGuidanceImageCustomization;
    headerFont: string;
    subtextFont: string;
    backgroundColors: string;
    foregroundColor: string;
    readyScreenTextBackgroundColor: string;
    readyScreenTextBackgroundCornerRadius: string;
}
export interface OverlayCustomization {
    backgroundColor: string;
    foregroundColor: string;
    foregroundColorReverse: string;
    blurEffectStyle: string;
    brandingImage: string;
    brandingImageReverse: string;
    brightenScreenButtonImage: string;
    darkenScreenButtonImage: string;
}
export interface ResultScreenCustomization {
    backgroundColors: string;
    foregroundColor: string;
    resultAnimationBackgroundColor: string;
    resultAnimationForegroundColor: string;
    messageFont: string;
    successMessage: string;
    activityIndicatorColor: string;
    uploadProgressFillColor: string;
    uploadProgressTrackColor: string;
}
export declare class ZoomCustomization {
    ovalCustomization: ZoomOvalCustomization;
    feedbackCustomization: ZoomFeedbackBarCustomization;
    frameCustomization: ZoomFrameCustomization;
    exitAnimationCustomization: ZoomExitAnimationCustomization;
    cancelButtonCustomization: ZoomCancelButtonCustomization;
    sessionTimerCustomization: ZoomSessionTimerCustomization;
    guidanceImageCustomization: ZoomGuidanceImageCustomization;
    initialLoadingAnimationCustomization: ZoomInitialLoadingAnimationCustomization;
    guidanceCustomization: ZoomGuidanceCustomization;
    overlayCustomization: ZoomOverlayCustomization;
    resultScreenCustomization: ZoomResultScreenCustomization;
    idScanCustomization: ZoomIDScanCustomization;
    enableLowLightMode: boolean;
    showRetrySideBySide: boolean;
    showRetryLighting: boolean;
    showRetryAngle: boolean;
    showNewUserGuidanceAngle: boolean;
    showGetReadyToZoomOval: boolean;
    showNewUserGuidanceWebCam: boolean;
    userFeatureFlags: {
        key: string;
    }[];
    constructor(featureFlags?: {
        key: string;
    }[]);
    [key: string]: {
        key: string;
    }[] | boolean | ZoomIDScanCustomization | ZoomOvalCustomization | ZoomFeedbackBarCustomization | ZoomFrameCustomization | ZoomExitAnimationCustomization | ZoomCancelButtonCustomization | ZoomSessionTimerCustomization | ZoomGuidanceImageCustomization | ZoomInitialLoadingAnimationCustomization | ZoomGuidanceCustomization | ZoomOverlayCustomization | ZoomResultScreenCustomization | string;
}
export declare class ZoomSessionTimerCustomization implements SessionTimerCustomization {
    maxTimeOverall: number;
    maxTimeToDetectFirstFace: number;
    maxTimeToDetectFirstFaceInPhaseTwo: number;
    maxTimeBeforeCameraPermissionsError: number;
    constructor();
}
export declare class ZoomExitAnimationCustomization implements ExitAnimationCustomization {
    exitAnimationSuccess: ZoomExitAnimationStyle;
    exitAnimationUnsuccess: ZoomExitAnimationStyle;
    constructor();
}
export declare class ZoomOvalCustomization implements OvalCustomization {
    strokeColor: string;
    progressColor1: string;
    progressColor2: string;
    progressStrokeWidth: number;
    strokeWidth: number;
    constructor();
}
export declare class ZoomFrameCustomization implements FrameCustomization {
    borderColor: string;
    borderCornerRadius: string;
    borderWidth: string;
    backgroundColor: string;
    blurEffectStyle: string;
    topMargin: string;
    sizeRatio: string;
    fullScreenBehavior: string;
    constructor();
}
export declare class ZoomCancelButtonCustomization implements CancelButtonCustomization {
    location: ZoomCancelButtonLocation;
    customImage: string;
    constructor();
}
export declare class ZoomFeedbackBarCustomization implements FeedbackCustomization {
    backgroundColor: string;
    textColor: string;
    textFont: string;
    cornerRadius: string;
    shadow: string;
    enablePulsatingText: boolean;
    topMargin: string;
    constructor();
}
export declare class ZoomInitialLoadingAnimationCustomization implements InitialLoadingAnimationCustomization {
    element: HTMLElement;
    constructor();
}
export declare class ZoomGuidanceImageCustomization implements GuidanceImageCustomization {
    private directory;
    idealZoomImage: string;
    badLightingImage: string;
    goodLightingImage: string;
    badAnglePhoneImage: string;
    goodAnglePhoneImage: string;
    badAngleWebcamImage: string;
    goodAngleWebcamImage: string;
    introScreenBrandingImage: string;
    cameraPermissionsScreenImage: string;
    lockoutScreenLockedImage: string;
    lockoutScreenUnlockedImage: string;
    retryScreenSkipArrow: string;
    constructor(directoryForImageFiles?: string);
}
export declare class ZoomGuidanceCustomization implements GuidanceCustomization {
    private directory;
    buttonFont: string;
    buttonBorderWidth: string;
    buttonBorderColor: string;
    buttonCornerRadius: string;
    buttonTextNormalColor: string;
    buttonTextHighlightColor: string;
    buttonBackgroundNormalColor: string;
    buttonBackgroundHighlightColor: string;
    headerFont: string;
    subtextFont: string;
    backgroundColors: string;
    foregroundColor: string;
    readyScreenTextBackgroundColor: string;
    readyScreenTextBackgroundCornerRadius: string;
    imageCustomization: ZoomGuidanceImageCustomization;
    constructor(directoryForImageFiles?: string);
}
export declare class ZoomOverlayCustomization implements OverlayCustomization {
    backgroundColor: string;
    foregroundColor: string;
    foregroundColorReverse: string;
    blurEffectStyle: string;
    brandingImage: string;
    brandingImageReverse: string;
    brightenScreenButtonImage: string;
    darkenScreenButtonImage: string;
    constructor();
}
export declare class ZoomResultScreenCustomization implements ResultScreenCustomization {
    backgroundColors: string;
    foregroundColor: string;
    resultAnimationBackgroundColor: string;
    resultAnimationForegroundColor: string;
    messageFont: string;
    successMessage: string;
    activityIndicatorColor: string;
    uploadProgressFillColor: string;
    uploadProgressTrackColor: string;
    constructor();
}
export declare class ZoomIDScanCustomization {
    private defaultLocationForImages;
    selectionScreenForegroundColor: string;
    headerFont: string;
    buttonFont: string;
    buttonBorderWidth: string;
    buttonBorderColor: string;
    buttonCornerRadius: string;
    buttonTextNormalColor: string;
    buttonTextHighlightColor: string;
    buttonBackgroundNormalColor: string;
    buttonBackgroundHighlightColor: string;
    selectionScreenBackgroundColors: string;
    selectionScreenBlurEffectStyle: string;
    selectionScreenBrandingImage: string;
    captureScreenForegroundColor: string;
    captureScreenTextBackgroundColor: string;
    captureScreenTextBackgroundBorderColor: string;
    captureScreenTextBackgroundBorderWidth: string;
    captureScreenTextBackgroundCornerRadius: string;
    captureScreenIDCardFrame640By480Image: string;
    captureScreenIDCardFrame640By360Image: string;
    captureScreenIDCardFrameMobileImage: string;
    captureScreenPassportFrame640By480Image: string;
    captureScreenPassportFrame640By360Image: string;
    captureScreenPassportFrameMobileImage: string;
    subtextFont: string;
    reviewScreenForegroundColor: string;
    reviewScreenTextBackgroundColor: string;
    reviewScreenTextBackgroundBorderColor: string;
    reviewScreenTextBackgroundBorderWidth: string;
    reviewScreenTextBackgroundBorderCornerRadius: string;
    reviewScreenDocumentPreviewCornerRadius: string;
    reviewScreenBackgroundColors: string;
    reviewScreenBlurEffectStyle: string;
    captureScreenIDFrontPlaceHolderImage: string;
    captureScreenIDBackPlaceHolderImage: string;
    captureScreenPassportPlaceholderImage: string;
    captureScreenIDFrontCheckmarkImage: string;
    captureScreenIDBackCheckmarkImage: string;
    captureScreenPassportCheckmarkImage: string;
    constructor();
    [key: string]: string;
}
export declare var ZoomCustomizations: {
    setCustomization: (updatedCustomization: ZoomCustomization) => void;
    ZoomCustomization: typeof ZoomCustomization;
    currentCustomization: ZoomCustomization;
    featureFlagOverride(zoomGuardRailType: ZoomGuardrailCustomizationType): boolean;
    ZoomOvalCustomization: typeof ZoomOvalCustomization;
    ZoomCancelButtonCustomization: typeof ZoomCancelButtonCustomization;
    ZoomExitAnimationCustomization: typeof ZoomExitAnimationCustomization;
    ZoomFeedbackBarCustomization: typeof ZoomFeedbackBarCustomization;
    ZoomFrameCustomization: typeof ZoomFrameCustomization;
    ZoomSessionTimerCustomization: typeof ZoomSessionTimerCustomization;
    ZoomImageCustomization: typeof ZoomGuidanceImageCustomization;
    ZoomInitialLoadingAnimationCustomization: typeof ZoomInitialLoadingAnimationCustomization;
    ZoomGuidanceCustomization: typeof ZoomGuidanceCustomization;
    ZoomOverlayCustomization: typeof ZoomOverlayCustomization;
    ZoomExitAnimationStyle: typeof ZoomExitAnimationStyle;
    ZoomCancelButtonLocation: typeof ZoomCancelButtonLocation;
};
