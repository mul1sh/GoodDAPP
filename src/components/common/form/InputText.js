// @flow
import React, { useEffect } from 'react'
import { isMobileSafari } from 'mobile-device-detect'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import normalize from '../../../lib/utils/normalizeText'
import SimpleStore from '../../../lib/undux/SimpleStore'
import { withStyles } from '../../../lib/styles'
import Icon from '../view/Icon'
import Config from '../../../config/config'
import ErrorText from './ErrorText'

const InputText = ({ error, onCleanUpField, styles, theme, style, getRef, ...props }: any) => {
  const simpleStore = SimpleStore.useStore()

  const onFocusMobileSafari = () => {
    console.info('onFocus')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    simpleStore.set('isMobileSafariKeyboardShown')(true)
  }

  const onBlurMobileSafari = () => simpleStore.set('isMobileSafariKeyboardShown')(false)

  useEffect(() => {
    return () => simpleStore.set('isMobileSafariKeyboardShown')(false)
  }, [])

  const inputColor = error ? theme.colors.red : theme.colors.darkGray
  const inputStyle = {
    borderBottomColor: inputColor,
    color: inputColor,
  }

  const shouldChangeSizeOnKeyboardShown = isMobileSafari && simpleStore.set && Config.safariMobileKeyboardGuidedSize
  return (
    <View style={styles.view}>
      <View style={styles.view}>
        <TextInput
          {...props}
          ref={getRef}
          style={[styles.input, inputStyle, style]}
          placeholderTextColor={theme.colors.gray50Percent}
          onFocus={() => {
            if (shouldChangeSizeOnKeyboardShown) {
              onFocusMobileSafari()
            }
            if (props.onFocus) {
              props.onFocus()
            }
          }}
          onBlur={() => {
            if (shouldChangeSizeOnKeyboardShown) {
              onBlurMobileSafari()
            }
            if (props.onBlur) {
              props.onBlur()
            }
          }}
        />
        {onCleanUpField && error !== '' && (
          <TouchableOpacity style={styles.suffixIcon} onPress={() => onCleanUpField('')}>
            <Icon size={normalize(16)} color={inputColor} name="close" />
          </TouchableOpacity>
        )}
      </View>
      <ErrorText error={error} />
    </View>
  )
}

const getStylesFromProps = ({ theme }) => ({
  input: {
    ...theme.fontStyle,
    backgroundColor: theme.colors.surface,
    borderBottomColor: theme.colors.darkGray,
    borderBottomStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    color: theme.colors.darkGray,
    fontFamily: theme.fonts.slab,
    paddingHorizontal: theme.sizes.defaultQuadruple,
    paddingVertical: theme.sizes.defaultHalf,
  },
  view: {
    flex: 1,
    marginBottom: theme.sizes.default,
  },
  suffixIcon: {
    paddingTop: theme.paddings.mainContainerPadding,
    position: 'absolute',
    right: theme.sizes.default,
    zIndex: 1,
  },
})

export default withStyles(getStylesFromProps)(InputText)
