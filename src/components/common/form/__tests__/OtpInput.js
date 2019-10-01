import React from 'react'
import renderer from 'react-test-renderer'
import OtpInput from '../OtpInput'
import { withThemeProvider } from '../../../../__tests__/__util__'

// Note: test renderer must be required after react-native.

describe('OtpInput', () => {
  const WrappedOtpInput = withThemeProvider(OtpInput)

  it('renders without errors', () => {
    const tree = renderer.create(<WrappedOtpInput numInputs={6} />)
    expect(tree.toJSON()).toBeTruthy()
  })

  it('matches snapshot', () => {
    const component = renderer.create(<WrappedOtpInput numInputs={6} value="Text" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
