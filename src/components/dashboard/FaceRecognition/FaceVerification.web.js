// @flow
import React from 'react'
import logger from '../../../lib/logger/pino-logger'

// import { Wrapper } from '../../common'
// import userStorage from '../../../lib/gundb/UserStorage'
// import { fireEvent } from '../../../lib/analytics/analytics'
// import FRapi from './FaceRecognitionAPI'
// import type FaceRecognitionResponse from './FaceRecognitionAPI'
// import GuidedFR from './GuidedFRProcessResults'
// import ZoomCapture from './ZoomCapture'
// import { type ZoomCaptureResult } from './Zoom'
import zoomSdkLoader from './ZoomSdkLoader'

const log = logger.child({ from: 'FaceVerification' })

declare var ZoomSDK: any
export default class FaceVerificationprops extends React.Component<> {
  zoomManagedSession: any

  async componentWillMount() {
    await zoomSdkLoader.ready
  }

  async componentDidMount() {
    await zoomSdkLoader.ready

    log.info('ready zoom')
    this.zoomManagedSession = new ZoomSDK.ZoomManagedSession(
      res => log.debug('zoom session complete', res, this.zoomManagedSession),
      'dn7644BGhERbp4lSzMNilj7tenuXgHKv',
      'https://api.zoomauth.com/api/v2/biometrics',
      ZoomSDK.ZoomManagedSessionMode.Liveness
    )
  }

  render() {
    return <div />
  }
}
